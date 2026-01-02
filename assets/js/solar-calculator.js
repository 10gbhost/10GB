/* ============================================
   Solar Work Calculator
   ============================================ */

function calculateSolarSystem() {
    // Get input values
    const load = parseFloat(document.getElementById('total-load').value) || 0;
    const hours = parseFloat(document.getElementById('usage-hours').value) || 0;
    
    if (load <= 0 || hours <= 0) {
        showNotification('Please enter valid values for load and usage hours.', 'error');
        return;
    }
    
    // Calculate daily energy consumption (Wh)
    const dailyEnergyWh = load * hours;
    const dailyEnergyKwh = dailyEnergyWh / 1000;
    
    // Calculate Inverter Size (kVA)
    // Add 25% overhead for surge capacity
    const inverterSizeKva = (load * 1.25) / 1000;
    
    // Calculate Battery Capacity (Ah)
    // Assuming 12V system, with 50% depth of discharge
    // Battery Ah = (Daily Energy Wh * Days of autonomy) / (Battery Voltage * Depth of Discharge)
    // Using 1 day autonomy and 50% DoD
    const batteryVoltage = 48; // Standard for most systems
    const daysOfAutonomy = 1;
    const depthOfDischarge = 0.5;
    const batteryCapacityAh = (dailyEnergyWh * daysOfAutonomy) / (batteryVoltage * depthOfDischarge);
    
    // Calculate Number of Solar Panels
    // Assuming average 5 peak sun hours in Nigeria
    // Panel efficiency factor: 0.8 (accounting for losses)
    const peakSunHours = 5;
    const systemEfficiency = 0.8;
    const panelWattage = 550; // Standard panel wattage
    
    const requiredSolarCapacity = dailyEnergyWh / (peakSunHours * systemEfficiency);
    const numberOfPanels = Math.ceil(requiredSolarCapacity / panelWattage);
    const totalSolarCapacity = numberOfPanels * panelWattage;
    
    // Display results
    document.getElementById('result-inverter').textContent = inverterSizeKva.toFixed(2) + ' kVA';
    document.getElementById('result-battery').textContent = batteryCapacityAh.toFixed(0) + ' Ah';
    document.getElementById('result-panels').textContent = numberOfPanels + ' panels';
    document.getElementById('result-solar-capacity').textContent = (totalSolarCapacity / 1000).toFixed(2) + ' kW';
    document.getElementById('result-daily-energy').textContent = dailyEnergyKwh.toFixed(2) + ' kWh';
    
    // Show results section
    document.getElementById('calculator-results').style.display = 'block';
    
    // Scroll to results
    document.getElementById('calculator-results').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
    });
}

// Reset calculator
function resetCalculator() {
    document.getElementById('total-load').value = '';
    document.getElementById('usage-hours').value = '';
    document.getElementById('calculator-results').style.display = 'none';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateSolarSystem);
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', resetCalculator);
    }
    
    // Allow Enter key to calculate
    const inputs = document.querySelectorAll('#total-load, #usage-hours');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateSolarSystem();
            }
        });
    });
});
