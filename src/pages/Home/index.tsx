import { Profile, ProfileDescription } from './styles'

export const Home = () => {
  return (
    <div>
      <Profile>
        <img
          src="https://avatars.githubusercontent.com/u/60452560?v=4"
          alt=""
        />

        <ProfileDescription>
          <h1>Felipe</h1>
          <p>Level 1</p>

          <div>
            <p>
              <i className="fa-brands fa-github"></i>
              felipeandrealves
            </p>

            <p>
              <i className="fa-solid fa-building"></i>
              Synvia
            </p>

            <p>
              <i className="fa-solid fa-user-group"></i>
              32 seguidores
            </p>
          </div>

          <a href="#">
            github
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </ProfileDescription>
      </Profile>
    </div>
  )
}
