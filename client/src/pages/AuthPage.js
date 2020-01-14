import 'materialize-css'
import React from 'react'

export const AuthPage = () => {
    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Сократи ссылку!</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input 
                                    placeholder="Введите Email" 
                                    id="email" 
                                    type="email" 
                                    name="email"
                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field">
                                <input 
                                    placeholder="Введите Пароль" 
                                    id="password" 
                                    type="password" 
                                    name="password"
                                />
                                <label htmlFor="email">Пароль</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4" style={{marginRight: 10}}>Войти для</button>
                        <button className="btn grey lighten-1 black-text">Регистрации</button>
                    </div>
                </div>
            </div>
        </div>
    )
}