const apiKey: string = process.env.REACT_APP_API_KEY as string
export const weatherApi = (city: string) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

export const forecastApi = (city: string) =>
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
