import React from 'react';

/**TODO: textarea код сенбокс где 1fr ????*/

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
                    <button className="addNews">
                        <div className="addButtonText">Добавить</div>
                    </button>
                    <div className="headerSpacer"></div>
                    <div className="userLogin">
                        <img src="img/userImg.svg" alt="" className="userImg"/>
                    </div>
                </nav>
            </header>
            <main style={{display: "none"}} className="main">
                <aside className="sidebar">
                    <nav className="sidebarMenu">
                        <ul className="sidebarList">
                            <li><span>Популярное</span></li>
                            <li><span>Новое</span></li>
                        </ul>
                        {/*<div className="sectionsMenu">Разделы</div>*/}
                        <ul className="newsTopics">
                            <li><span>Starwars</span></li>
                            <li><span>Новости города</span></li>
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
                        <header className="contentHeader">
                            <img src="img/iconTopic.svg" alt="" className="iconTopic"/>
                            <div className="nameTopic">StarWars</div>
                        </header>
                        <div className="contentTitle">Лезвие бритвы (англ. Razor Crest) — канонерка, принадлежавшая Дину
                            Джарину.
                        </div>
                        <p className="news">Мандалорец использовал судно как транспорт и апартаменты, в то время как
                            охотился на беглецов во Внешнем Кольце.</p>
                        <div className="newsPicture">
                            <img src="img/newsImg.jpg" alt="" className="newsImg"/>
                        </div>
                        <footer className="contentFooter">

                            <img src="img/commentImg.svg" alt="" className="commentButton"/>

                            <div className="like">
                                <img src="img/likeImg.svg" alt="" className="likeImg"/>
                                <div className="likeNumber">351</div>
                            </div>
                        </footer>
                    </div>
                    <div className="contentContainer">
                        <header className="contentHeader">
                            <img src="img/iconTopic.svg" alt="" className="iconTopic"/>
                            <div className="nameTopic">StarWars</div>
                        </header>
                        <div className="contentTitle">«Глава 4: Убежище»
                        </div>
                        <p className="news">В бегстве от Гильдии Мандалорец и Младенец прибывают на малонаселённую
                            планету Сорган.</p>
                        <div className="newsPicture">
                            <img src="img/newsImg2.jpg" alt="" className="newsImg"/>
                        </div>
                        <footer className="contentFooter">

                            <img src="img/commentImg.svg" alt="" className="commentButton"/>

                            <div className="like">
                                <img src="img/likeImg.svg" alt="" className="likeImg"/>
                                <div className="likeNumber">201</div>
                            </div>
                        </footer>
                    </div>
                </section>
                <section className="comments">
                    <div className="commentsContainer">
                        <div className="commentsTitle">
                            <span className="title">Комментарии</span>
                            <img src="img/chevronRight.svg" alt="" className="commTitleImg"/>
                        </div>
                        <div className="allComments">
                            <div className="comment">
                                <header className="commentHeader">
                                    <img src="img/avatarUser.jpg" alt="" className="avatarUser"/>
                                    <span className="userName">Малыш Грогу</span>
                                </header>
                                <div className="commentBody"> ..., опять какие-то ебеня</div>
                                <a className="newsTitle">«Глава 4: Убежище»</a>
                            </div>
                            <div className="comment">
                                <header className="commentHeader">
                                    <img src="img/avatarUser.jpg" alt="" className="avatarUser"/>
                                    <span className="userName">Малыш Грогу</span>
                                </header>
                                <div className="commentBody">Да ..., опять какие-то ебеня, не дает поспать, и нажимать
                                    кнопки.
                                </div>
                                <div className="newsTitle">«Глава 4: Убежище»</div>
                            </div>
                            <div className="comment">
                                <header className="commentHeader">
                                    <img src="img/avatarUser.jpg" alt="" className="avatarUser"/>
                                    <span className="userName">Малыш Грогу</span>
                                </header>
                                <div className="commentBody">Да ..., опять какие-то ебеня, не дает поспать, и нажимать
                                    кнопки.
                                </div>
                                <div className="newsTitle">«Глава 4: Убежище»</div>
                            </div>
                            <div className="comment">
                                <header className="commentHeader">
                                    <img src="img/avatarUser.jpg" alt="" className="avatarUser"/>
                                    <span className="userName">Малыш Грогу</span>
                                </header>
                                <div className="commentBody"> Да ..., опять какие-то ебеня, не дает поспать, и нажимать
                                    кнопки.
                                </div>
                                <div className="newsTitle">«Глава 4: Убежище»</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <main className="contentAdd">
                <div className="editor">
                    <div className="avatarImg">
                        <img src="img/avatarUser.jpg" alt=""/>
                    </div>
                    <div className="userLabel">Мои новости</div>

                </div>
                <div className="closeEditor">
                    <img src="img/closeButton.svg" alt="" className="closeImg"/>
                </div>
                <form action="" target="" className="editorTextArea">
                        <textarea  name="message" placeholder="Новость" className="textArea"></textarea>
                        <input className="buttonAdd" type="submit" value="Опубликовать"></input>
                </form>





                {/*                <div className="editorTextArea">*/}
                {/*                    <textarea name="TextHews" id=""  className="textareaEditor">*/}

                {/*                    </textarea>*/}
                {/*                </div>*/}
                {/*                <div className="addContentButton">*/}
                {/*<button className="addContent">Опубликовать</button>*/}
                {/*                </div>*/}
            </main>
        </div>
    );
}

export default App;
