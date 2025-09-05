import { VehicleEventListener } from "@/features/vehicle-control/model/vehicleEvents";
import { VehiclePanel } from "@/features/vehicle-control/ui/VehiclePanel";

export default function VehiclePage() {
	return (
		<main className="full background center">
			<VehiclePanel />
			<VehicleEventListener />
		</main>
	);
}
