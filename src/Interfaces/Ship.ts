import Vehicles from './Vehicles';

interface Ship {
  quantity: number;
  weight: number;
  storeVehicles: (vehicles: Vehicles)
  transport: (A: number, B: number)
}

export default Ship;
