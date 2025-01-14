import React from 'react'

const optionsQuestionThree = ['< 20', '20-25', '25+']

export const Input3 = ({temperature, setTemperature}) => {

  const onTemperatureChange =(event) => {
    setTemperature(event.target.value)
  }

   
  return (
    <div>
      <h3>
        Preferred temperature 🔥
      </h3>

      <div>
        {optionsQuestionThree.map((temperatureChoice) => {
          return (
            <div key={temperatureChoice}>
              <label>
                {temperatureChoice}
                  <input 
                    id={temperatureChoice} 
                    name='temperature'
                    type="radio"
                    value={temperatureChoice}
                    aria-label='select your preferred summer temperature'
                    onChange={onTemperatureChange}
                    checked={temperature === temperatureChoice}
                  />
              </label>              
            </div>
          )
        })}
      </div>
    </div>
  )
}