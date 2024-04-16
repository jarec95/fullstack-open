import { useState } from 'react'
import './App.css'

function Hello({name, age}) {
    return (
        <div>
            <p>Hello {name}, you are {age} years old</p>
        </div>
    )
}

function App() {
    const date = new Date();
    const days = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: "Wednesday",
        4: "Thursday",
        5: "Friday"
    }
    const a = 10;
    const b = 11;
    console.log(a + b, date);



    return (
        <div>
            <p>Hello World!</p>
            <p>
                {a} plus {b} is {a+b}
            </p>
            <p>
                The day is {days[date.getDay()]}
            </p>
            <Hello name="Jarec" age="29" />
            <Hello name="Lyssa" age="22"/>
      </div>
  )
}

export default App
