import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    //global states
    const [items, setItems] = useState([]);

    function handleItems(item) {
        setItems((items) => [...items, item]);
    }

    function deleteItem(id) {
        setItems(items.filter(item => item.id !== id));
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <Header />
            <Nav handleItems={handleItems} />
            <Listarea items={items} deleteItem={deleteItem} />
            <Footer items={items} />
        </div>
    );
}

const Header = () => {
    return <h2 className="text-2xl font-bold text-center mb-4">ToDo List</h2>
}

const Nav = ({ handleItems }) => {
    //local state
    const [name, setName] = useState("");

    const handleClick = () => {
        const newItem = { name, id: uuidv4() };
        handleItems(newItem);
        setName("");
    }

    return (
        <div className="mb-4 flex justify-center items-center">
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="border border-gray-300 p-2 rounded mr-2"
                placeholder="Add a new task"
            />
            <button 
                onClick={handleClick} 
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                Add Task
            </button>
        </div>
    );
}

const Listarea = ({ items, deleteItem }) => {
    return (
        <ul className="mb-4">
            {items.map((item) => (
                <li key={item.id} className="bg-white p-4 rounded shadow mb-2 flex justify-between items-center">
                    {item.name}
                    <button 
                        onClick={() => deleteItem(item.id)} 
                        className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

const Footer = ({ items }) => {
    return (
        <div className="text-center">
            {items.length !== 0 ? (
                <p className="text-black-700">
                    You have <b><u>{items.length}</u></b> tasks in your pipeline
                </p>
            ) : (
                <p className="text-black-700">You can start adding tasks</p>
            )}
        </div>
    );
}

export default App;
