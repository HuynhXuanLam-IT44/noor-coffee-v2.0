import React from "react";
import {
	TileLayer,
	Marker,
	Popup,
	Tooltip,
	MapContainer as LeafletMap,
} from "react-leaflet";
import "./Maps.css";
import "leaflet/dist/leaflet.css";
import { iconNoor } from "./IconMarker";
import logoImg from "../../../assets/img/logo-web-black.png";
const Map = () => {
	const position = [16.053448, 108.241285];
	const zoom = 18;
	return (
		<div className="map">
			<LeafletMap center={position} zoom={zoom}>
				<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={position} icon={iconNoor}>
					<Popup>
						<div className="info-container">
							<div className="info__logo">
								<img src={logoImg} alt="logo" />
							</div>
							<div className="info__name">Noor Coffee & Tea</div>
							<div className="info__address">
								Địa chỉ: 30 Phan Thúc Duyện, Ngũ Hành Sơn, Đà Nẵng, Vietnam
							</div>
						</div>
					</Popup>
					<Tooltip>Noor Coffee & Tea</Tooltip>
				</Marker>
			</LeafletMap>
		</div>
	);
};

export default Map;
