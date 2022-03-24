import React, { FC } from 'react'
import image from '../../images/cloud.png'

type TWindowProps = {
	title: string;
	cities: Array<string>;
}

const Window: FC<TWindowProps> = ({ title, cities }) => {
  return (
		<>
			<h2>{title}</h2>
			<select size={4} name="cities">
				<option disabled>Select city</option>
				{cities.map((city, i) => (
					<option key={i} value={city}>{city}</option>
				))}
				<option value="Чебурашка">Чебурашка</option>
				<option selected value="Крокодил Гена">Крокодил Гена</option>
				<option value="Шапокляк">Шапокляк</option>
				<option value="Крыса Лариса">Крыса Лариса</option>
			</select>
			<img src={image} alt="cloud"/>
			<p>Fill in all the fields and the weather will be displayed</p>
		</>
  )
}

export default Window
