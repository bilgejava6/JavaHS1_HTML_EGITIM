import React from "react";
import { IMusteri } from "../model/IMusteri";

function Donguler() {
	const mList: IMusteri[] = [
		{
			id: 1,
			ad: "Ulrikaumeko",
			telefon: "916-854-3190",
			active: true,
		},
		{
			id: 2,
			ad: "Hastie",
			telefon: "291-916-9216",
			active: false,
		},
		{
			id: 3,
			ad: "Ina",
			telefon: "763-258-4582",
			active: false,
		},
		{
			id: 4,
			ad: "Sollie",
			telefon: "805-143-6698",
			active: false,
		},
		{
			id: 5,
			ad: "Rossie",
			telefon: "835-884-4642",
			active: false,
		},
		{
			id: 6,
			ad: "Jackelyn",
			telefon: "153-663-2584",
			active: true,
		},
		{
			id: 7,
			ad: "Dahlia",
			telefon: "308-688-0678",
			active: true,
		},
		{
			id: 8,
			ad: "Pail",
			telefon: "279-103-7873",
			active: true,
		},
		{
			id: 9,
			ad: "Cynthia",
			telefon: "492-275-9459",
			active: false,
		},
		{
			id: 10,
			ad: "Madelle",
			telefon: "113-867-3628",
			active: true,
		},
	];

	return (
		<>
			<h1>Döngüler ile Çalışmak</h1>
			<hr />
			{
                mList.map(data => {
                  return(<div>{data.ad + '++++'}</div>) 
                })
            }
		</>
	);
}

export default Donguler;
