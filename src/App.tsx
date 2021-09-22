import React from 'react';

function App() {
    return (
        <div className="wrapper clear">
            <header className="header">
                <div className="headerBurger">
                    <img src="img/burgerImg.svg" alt=""/>
                </div>
                <img src="img/logo.svg" alt="" className="headerLogo"/>
                <nav className="navBlock">
                    <input placeholder={"Поиск..."} type="text" className="searchField"/>
                    <button className="addNews"><div className="addButtonText">Добавить</div></button>
                    <div className="headerSpacer"></div>
                    <div className="userLogin">
                        <img src="img/userImg.svg" alt="" className="userImg"/>
                    </div>
                </nav>
            </header>
            <main className="main">
                <aside className="sidebar">
                    <nav className="sidebarMenu">
                        <ul className="sidebarList">
                            <li>Популярное</li>
                            <li>Новое</li>
                        </ul>
                        <ul className="newsTopics">
                            <li>Starwars</li>
                            <li>Новости города</li>
                            <li>Водоканал</li>
                        </ul>
                    </nav>
                    <footer className="footer">
                        <div className="contact">
                            <a href=""><img src="img/github.svg" alt=""/></a>
                            <a href=""><img src="img/telegram.svg" alt=""/></a>
                        </div>
                        <div className="info">
                            <p>by Sas31 © 2021. StarsNews.</p>
                        </div>
                    </footer>
                </aside>
                <section className="content">
                    <div className="contentContainer">

                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
