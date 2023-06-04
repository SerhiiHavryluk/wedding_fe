import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './user.module.css'


const UserList = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Ошибка при получении пользователей:', error);
    }
  };
  
  console.log(users)


  return (
    <div>
	  {users.map((user) => (
        <div key={user.id}>
          <h3>{user.firstName} {user.secondName}</h3>

          <ul>
            <li className={classes.li}>
              <label className={classes.checkboxInput1}>
                <input
                  type="checkbox"
                  name="willAttend"
                  checked={user.willAttend}
                  className={classes.checkbox}
                  disabled
                />
                Я прийду/Мы прийдемо
              </label>
            </li>
            <li className={classes.li}>
                    <label className={classes.checkboxInput2}>
                        <input
                            type="checkbox"
                            name="unableToAttend"
                            checked={user.unableToAttend}
                            className={classes.checkbox}
                        />
                        Прийти не зможу
                    </label>
                </li>
                <li className={classes.li}>
                    <label className={classes.checkboxInput3}>
                        <input
                            type="checkbox"
                            name="willRespondLater"
                            checked={user.willRespondLater}
                            className={classes.checkbox}

                        />
                        Дам відповідь пізніше
                    </label>
                </li>
            </ul>
            <ul>
                <p className={classes.drink}>
                    Переваги за напоями
                </p>
                <li className={classes.li}>
                    <label className={classes.checkboxInput4}>
                        <input
                            type="checkbox"
                            name="willChampagne"
                            checked={user.willChampagne}
                            className={classes.checkbox}
                        />
                        Шампанське
                    </label>
                </li>
                <li className={classes.li}>
                    <label className={classes.checkboxInput5}>
                        <input
                            type="checkbox"
                            name="willWhiteWine"
                            checked={user.willWhiteWine}
                            className={classes.checkbox}
                        />
                        Біле вино
                    </label>
                </li>
                <li className={classes.li}>
                    <label className={classes.checkboxInput6}>
                        <input
                            type="checkbox"
                            name="willRedWine"
                            checked={user.willRedWine}
                            className={classes.checkbox}
                        />
                        Червоне виное
                    </label>
                </li>
                <li className={classes.li}>
                    <label className={classes.checkboxInput7}>
                        <input
                            type="checkbox"
                            name="willCognac"
                            checked={user.willCognac}
                            className={classes.checkbox}
                        />
                        Коньяк
                    </label>
                </li>
                <li className={classes.li}>
                    <label className={classes.checkboxInput8}>
                        <input
                            type="checkbox"
                            name="willGorilka"
                            checked={user.willGorilka}
                            className={classes.checkbox}
                        />
                        Горілка
                    </label>
                </li>
                <li className={classes.li}>
                    <label className={classes.checkboxInput9}>
                        <input
                            type="checkbox"
                            name="willВіski"
                            checked={user.willВіski}
                            className={classes.checkbox}
                        />
                        Віскі
                    </label>
                </li>
                <li className={classes.li}>
                    <label className={classes.checkboxInput10}>
                        <input
                            type="checkbox"
                            name="willNonAlcoholicDrinks"
                            checked={user.willNonAlcoholicDrinks}
                            className={classes.checkbox}
                        />
                        Безалкогольні напої
                    </label>
                </li>
          </ul>
        </div>
	   ))}
    </div>
  );
};

export default UserList;
