import React from 'react';
import Header from '../Header/Header';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const assignMentNumber = [
    { "id": 1, "assignment_number": "1st", "mark": 48 },
    { "id": 2, "assignment_number": "2nd", "mark": 54 },
    { "id": 3, "assignment_number": "3rd", "mark": 60 },
    { "id": 4, "assignment_number": "4th", "mark": 59 },
    { "id": 5, "assignment_number": "5th", "mark": 53 },
    { "id": 6, "assignment_number": "6th", "mark": 59 },
    { "id": 7, "assignment_number": "7th", "mark": 60 },
    { "id": 8, "assignment_number": "8th", "mark": 60 },
]

const Statics = () => {
    return (
        <div>
            <Header></Header>

        <div>
        <div className='ml-32 mt-16'>
                <ComposedChart
                      width={1000}
                    height={400}
                    data={assignMentNumber}
                    margin={{
                        top: 20,
                        right: 20,
                        // bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="assignment_number" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="mark" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </div>

        </div>
    );
};

export default Statics;