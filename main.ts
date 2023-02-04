//% color="#14de46" weight=100
namespace gorve_temperature {

    //% block
    export function TemperaturCelsius(): number {
      function getTemperature_GroveSensor (anaVal: number) {
        anaVal = anaVal / 1023 * 3300
        ntc = (3300 / valbet - 1) * 10000
        temperatureKelvin = 1 / (1 / 298.15 + 1 / 4275 * Math.log(ntc/10000))
        temperatureCelcius = temperatureKelvin - 273.15
        return temperatureCelcius
      }

      let analogValueA1 = 0
      let ntc = 0
      let temperatureKelvin = 0
      let temperatureCelcius = 0

      analogValueA1 = pins.analogReadPin(AnalogPin.C16)
      return getTemperature_GroveSensor(analogValueA1)
    }
}
