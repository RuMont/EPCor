import React, { Component } from "react";
import Chart from "react-google-charts";
const data = [
  [
    'Mes',
    'Córdoba',
    'Huelva',
    'Málaga',
    'Sevilla',
    'Cádiz',
    'Almería',
    'Granada',
    'Jaén',
    'Average',
    
    
  ],
  ['2021', 165, 938, 522, 998, 450, 614.6, 673.5, 609.4, 629.2],
  ['2022', 135, 1120, 599, 1268, 288, 682, 728.3, 692.0, 787.3],
];
class GoogleChart extends Component {
  
  constructor(props) {
    super(props)
  }
  render() {
      return (
          <div className="container">
              <Chart
                width={'600px'}
                height={'350px'}
                chartType="ComboChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                  
                  vAxis: { title: 'Puestos ofertados' },
                  hAxis: { title: 'Año' },
                  seriesType: 'bars',
                  
                }}
                rootProps={{ 'data-testid': '1' }}
              />                         
          </div>                  
      )
  }
}
export default GoogleChart;