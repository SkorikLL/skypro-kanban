import { useState } from "react";
import * as S from "./Header.styled";

function Header({ name, onCardAdd, email }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    // Для изменения состояния вызываем функцию setIsOpen и передаем новое
    // значение в качестве аргумента.
    setIsOpen((prevState) => !prevState);
  }

  return (
    <S.Header>
      <div className="container">
        <S.HeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="public/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="public/logo_dark.png" alt="logo" />
            </a>
          </div>
          <S.HeaderNav>
            <button
              className="header__btn-main-new _hover01"
              id="btnMainNew"
              onClick={onCardAdd}
            >
              <a
              //href="#popNewCard"
              >
                Создать новую задачу
              </a>
            </button>
            {/* <a
              href="#user-set-target"
              className="header__user _hover02"
              onClick={handleClick}
            ></a> */}
            <span className="header__user _hover02" onClick={handleClick}>
              {name || "Пользователь"}
            </span>
            {/* Если isOpen (false) показываем окно, где
            отображаются его имя и почта, иначе окно открыта и мы его скрываем */}
            {isOpen && (
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                {/* <a href="">x</a> */}
                <p className="pop-user-set__name">{name || "Пользователь"}</p>
                <p className="pop-user-set__mail">{email || "-"}</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </div>
    </S.Header>
  );
}

export default Header;
