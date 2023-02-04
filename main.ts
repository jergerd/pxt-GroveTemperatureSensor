//% color="#002050" weight=100
namespace TemperaturSensor {

    let ntc = 0
    let temperatureKelvin = 0

    function getTemperature_GroveSensor (anaVal: number) {
        anaVal = anaVal / 1023 * 3300
        ntc = (3300 / anaVal - 1) * 10000
        temperatureKelvin = 1 / (1 / 298.15 + 1 / 4275 * Math.log(ntc/10000))
        return temperatureKelvin
    }

    //% block
    export function TemperaturCelsius(): number {  
        let analogValueA1 = pins.analogReadPin(AnalogPin.C16)
        let temperatureCelcius = getTemperature_GroveSensor(analogValueA1)-273.15
        return temperatureCelcius
    }

    //% block
    export function TemperaturKelvin(): number {  
        let analogValueA1 = pins.analogReadPin(AnalogPin.C16)
        return getTemperature_GroveSensor(analogValueA1)
    }
}
