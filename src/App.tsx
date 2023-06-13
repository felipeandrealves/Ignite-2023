import { PlusCircle, Trash } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';

import Clipboard from './assets/img/Clipboard.svg';
import Logo from './assets/img/LogoTodo-Logo.svg';
import StyleSheet from './styles/App.module.css';
import { Checkbox } from './components/Checkbox';

import './styles/global.css';

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const [concludedTasks, setConcludedTasks] = useState<number>(0);

  const handleCreateTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask: Task = {
      id: uuid(),
      title: newTaskTitle,
      isCompleted: false,
    };

    setTasks((state) => [...state, newTask]);

    setNewTaskTitle('');
  };

  const handleNewTaskTextTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.target.value);
  };

  const handleDeleteTask = (id: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks);
  };

  const handleChangeTaskStatus = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }

      return task;
    });

    const howMuchConcludeTasks = updatedTasks.reduce((acc, task) => {
      if (task.isCompleted) return acc + 1;
      return acc;
    }, 0);

    updatedTasks.sort((a, b) => {
      if (a.isCompleted && !b.isCompleted) return 1;
      if (!a.isCompleted && b.isCompleted) return -1;
      return 0;
    });

    setConcludedTasks(howMuchConcludeTasks);
    setTasks(updatedTasks);
  };

  return (
    <main>
      <header className={StyleSheet.header}>
        <img src={Logo} alt="Logo Todo" />
      </header>

      <section className={StyleSheet.section}>
        <form className={StyleSheet.createTask} onSubmit={handleCreateTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskTextTitle}
            value={newTaskTitle}
          />

          <button type="submit">
            Criar <PlusCircle size={18} />
          </button>
        </form>

        <div className={StyleSheet.todoListHeader}>
          <p>
            Tarefas criadas <span>{tasks.length}</span>
          </p>

          <p>
            Concluidas{' '}
            <span>
              {tasks.length > 0
                ? `${concludedTasks} de ${tasks.length}`
                : tasks.length}
            </span>
          </p>
        </div>

        <div className={StyleSheet.taskList}>
          {tasks.length === 0 ? (
            <div className={StyleSheet.noTasks}>
              <img src={Clipboard} alt="Clipboard" />

              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          ) : (
            tasks.map(({ id, isCompleted, title }) => {
              return (
                <div key={id} className={StyleSheet.task}>
                  <Checkbox
                    id={id}
                    checked={isCompleted}
                    onChange={() => handleChangeTaskStatus(id)}
                  />

                  <p className={isCompleted ? StyleSheet.titleCompleted : ''}>
                    {title}
                  </p>

                  <button onClick={() => handleDeleteTask(id)}>
                    <Trash size={16} />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </section>
    </main>
  );
};

export default App;
