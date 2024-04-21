import { useState } from "react";

const AuthPage = () => {
  const [tab, setTab] = useState<number>(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleRegister(data: FormData) {
    data.forEach((dat, key) => console.log(dat, key));
  }
  function handleLogin() {}

  return (
    <div>
      <div className="tabs">
        <div className="tabs-header">
          <button onClick={() => setTab(0)}>Авторизация</button>
          <button onClick={() => setTab(1)}>Регистрация</button>
        </div>
        {tab === 0 ? (
          <div className="login">
            <h2>Авторизация</h2>
            <form
              action=""
              onSubmit={(e) => {
                console.log(1);
                e.preventDefault();
                console.log(2);
                handleRegister(new FormData(e.currentTarget));
                console.log(3);
              }}
            >
              <input placeholder="Логин" type="text" name="login" id="login" />
              <input
                placeholder="Пароль"
                type="text"
                name="password"
                id="password"
              />
              <button type="submit">Войти</button>
            </form>
          </div>
        ) : (
          <div className="login">
            <h2>Регистрация</h2>
            <form action="" onSubmit={handleLogin}>
              <p>Логин - буквы и цифры; пароль - буквы, цифры и !@#$%</p>
              <input type="text" name="login" id="login" />
              <input type="text" name="password" id="password" />
              <button type="submit">Зарегистрироваться</button>
            </form>
          </div>
        )}
        <p></p>
      </div>
    </div>
  );
};

export default AuthPage;
