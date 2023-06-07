import React, {useState} from 'react';
import classes from './form.module.css'
import axios from 'axios'

function WeddingFormName() {
    const [formData, setFormData] = useState({
        firstName: '',
        secondName: '',

        willAttend: false,
        unableToAttend: false,
        willRespondLater: false,

        willChampagne: false,
        willWhiteWine: false,
        willRedWine: false,
        willCognac: false,
        willGorilka: false,
        willВіski: false,
        willNonAlcoholicDrinks: false,
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://185.65.244.188:1310/', formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (response.status === 200) {
            alert('Дякуємо за вашу відповідь!');
          } else {
            console.log('Response error:', response.status);
          }
        } catch (error) {
            alert('Щось пішло не так')
          console.log('Error:', error);
        }
    
        setFormData({
          firstName: '',
          secondName: '',
          willAttend: false,
          unableToAttend: false,
          willRespondLater: false,
          willChampagne: false,
          willWhiteWine: false,
          willRedWine: false,
          willCognac: false,
          willGorilka: false,
          willВіski: false,
          willNonAlcoholicDrinks: false,
        });
      };
    



    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
    
        setFormData((prevState) => ({
          ...prevState,
          [name]: newValue,
        }));
      };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder={`Ваше ім'я`}
                    className={classes.input}
                />
            </label>

            <label>
                <input
                    type="text"
                    name="secondName"
                    value={formData.secondName}
                    onChange={handleChange}
                    placeholder={`Ім'я вашої пари`}
                    className={classes.input}
                />
            </label>
            <br/>
                <ul className={classes.ul}>
                    <p className={classes.h1}>
                        Присутність?
                    </p>
                    <li className={classes.li}>
                        <label>
                            <input
                                type="checkbox"
                                name="willAttend"
                                checked={formData.willAttend}
                                onChange={handleChange}
                                className={classes.checkbox}
                            />
                            Я прийду/Ми прийдемо
                        </label>
                    </li>
                    <li className={classes.li}>
                        <label>
                            <input
                                type="checkbox"
                                name="unableToAttend"
                                checked={formData.unableToAttend}
                                onChange={handleChange}
                                className={classes.checkbox}
                            />
                            Прийти не зможу
                        </label>
                    </li>
                    <li className={classes.li}>
                        <label>
                            <input
                                type="checkbox"
                                name="willRespondLater"
                                checked={formData.willRespondLater}
                                onChange={handleChange}
                                className={classes.checkbox}

                            />
                            Дам відповідь пізніше
                        </label>
                    </li>
                </ul>
            <ul className={classes.ul}>
                <p className={classes.drink}>
                    Переваги за напоями
                </p>
                <p className={classes.secondDrink}>
                    (Можна обрати декілька варіантів)
                </p>
                <li className={classes.li}>
                    <label>
                        <input
                            type="checkbox"
                            name="willChampagne"
                            checked={formData.willChampagne}
                            onChange={handleChange}
                            className={classes.checkbox}
                        />
                        Шампанське
                    </label>
                </li>
                <li className={classes.li}>
                    <label>
                        <input
                            type="checkbox"
                            name="willWhiteWine"
                            checked={formData.willWhiteWine}
                            onChange={handleChange}
                            className={classes.checkbox}
                        />
                        Біле вино
                    </label>
                </li>
                <li className={classes.li}>
                    <label>
                        <input
                            type="checkbox"
                            name="willRedWine"
                            checked={formData.willRedWine}
                            onChange={handleChange}
                            className={classes.checkbox}
                        />
                        Червоне вино
                    </label>
                </li>
                <li className={classes.li}>
                    <label>
                        <input
                            type="checkbox"
                            name="willCognac"
                            checked={formData.willCognac}
                            onChange={handleChange}
                            className={classes.checkbox}
                        />
                        Коньяк
                    </label>
                </li>
                <li className={classes.li}>
                    <label>
                        <input
                            type="checkbox"
                            name="willGorilka"
                            checked={formData.willGorilka}
                            onChange={handleChange}
                            className={classes.checkbox}
                        />
                        Горілка
                    </label>
                </li>
                <li className={classes.li}>
                    <label>
                        <input
                            type="checkbox"
                            name="willВіski"
                            checked={formData.willВіski}
                            onChange={handleChange}
                            className={classes.checkbox}
                        />
                        Віскі
                    </label>
                </li>
                <li className={classes.li}>
                    <label>
                        <input
                            type="checkbox"
                            name="willNonAlcoholicDrinks"
                            checked={formData.willNonAlcoholicDrinks}
                            onChange={handleChange}
                            className={classes.checkbox}
                        />
                        Безалкогольні напої
                    </label>
                </li>
            </ul>
            <button type="submit" className={classes.button}>
                Відправити
            </button>
        </form>
    );
}

export default WeddingFormName;
