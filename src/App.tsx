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
                            <li><span>Популярное</span></li>
                            <li><span>Новое</span></li>
                        </ul>
                        {/*<div className="sectionsMenu">Разделы</div>*/}
                        <ul className="newsTopics">
                            <li><span>Starwars</span></li>
                            <li><span>Новости города</span> </li>
                            <li><span>Водоканал</span></li>
                        </ul>
                    </nav>
                    <footer className="footer">
                        <div className="contact">
                            <a href=""><img src="img/github.svg" alt=""/></a>
                            <a className="telegramImg" href=""><img src="img/telegram.svg" alt=""/></a>
                        </div>
                        <div className="info">
                            <p>by Sas31 © 2021. StarsNews.</p>
                        </div>
                    </footer>
                </aside>
                <section className="content">
                    <div className="contentContainer">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                    </div>
                </section>
                <section className="comments">
                    <div className="comentsContainer">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur deleniti necessitatibus odio repellendus suscipit. Adipisci alias consequatur deserunt doloribus fuga, fugit itaque labore magni modi, nisi quae vitae?

                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
