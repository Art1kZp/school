import {
    // Component,
    useState,
    useRef
} from 'react';

import { Title } from './components/Title';
import './App.css';

const INITIAL_USERS = [
    {
        id: 1,
        name: 'John',
        age: 23,
        keyword: 'Bonjour'
    },
    {
        id: 2,
        name: 'Mike',
        age: 45,
        keyword: 'Aloha'
    },
    {
        id: 3,
        name: 'Bob',
        age: 56,
        keyword: 'Hello'
    }
];

const getInitialUsers = () => {
    console.time('Timer');

    for (let i = 0; i < 10000000; i++) {
        // ...
    }

    console.timeEnd('Timer');

    return INITIAL_USERS;
};

export const App = () => {
    const [users, setUsers] = useState(() => getInitialUsers());
    const [showHiddenMessage, setShowHiddenMessage] = useState(false);
    const [firstName, setFirstName] = useState('');

    const buttonRef = useRef();
    const prevUsersRef = useRef(users);

    const handleGetButtonElement = () => {
        buttonRef.current.click();
    };

    const handleRemoveUser = userId => {
        setUsers(prevUsers => {
            const filteredUsers = prevUsers.filter(u => u.id !== userId);

            prevUsersRef.current = prevUsers;

            return filteredUsers;
        });
    };

    const handleShowHiddenMessage = () => setShowHiddenMessage(true);
    const handleChangeInput = e => setFirstName(e.target.value);

    const count = users.length;

    return (
        <div className="app">
            <span>User count: {count}</span>

            <div>
                <button ref={buttonRef} type="button" onClick={handleShowHiddenMessage}>
                    Show hidden message
                </button>

                {showHiddenMessage && <p>This is a hidden message!</p>}
            </div>

            <div>
                <button type="button" onClick={handleGetButtonElement}>
                    Get button element
                </button>
            </div>

            <div>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={firstName}
                    onChange={handleChangeInput}
                />
            </div>

            {users.length > 0 ? (
                users.map(({ id, age, ...other }) => (
                    <div className="card" key={id}>
                        <Title {...other} />
                        <strong>{age}</strong>

                        <button type="button" onClick={() => handleRemoveUser(id)}>
                            Remove
                        </button>
                    </div>
                ))
            ) : (
                <p>There are no users</p>
            )}
        </div>
    );
};

// export class App extends Component {
//     // constructor(props) {
//     //     super(props);

//     //     this.state = {
//     //         users: INITIAL_USERS,
//     //         showHiddenMessage: false
//     //     };

//     //     this.handleRemoveUser = this.handleRemoveUser.bind(this);
//     // }

//     state = {
//         users: INITIAL_USERS,
//         showHiddenMessage: false
//     };

//     handleRemoveUser = userId => {
//         this.setState(prevState => ({
//             users: prevState.users.filter(u => u.id !== userId)
//         }));
//     };

//     handleShowHiddenMessage = () => {
//         this.setState({ showHiddenMessage: true });
//     };

//     render() {
//         const { users, showHiddenMessage } = this.state;

//         const count = users.length;

//         return (
//             <div className="app">
//                 <span>User count: {count}</span>

//                 <div>
//                     <button type="button" onClick={this.handleShowHiddenMessage}>
//                         Show hidden message
//                     </button>

//                     {showHiddenMessage && <p>This is a hidden message!</p>}
//                 </div>

//                 {users.length > 0 ? (
//                     users.map(({ id, age, ...other }) => (
//                         <div className="card" key={id}>
//                             <Title {...other} />
//                             <strong>{age}</strong>

//                             <button type="button" onClick={() => this.handleRemoveUser(id)}>
//                                 Remove
//                             </button>
//                         </div>
//                     ))
//                 ) : (
//                     <p>There are no users</p>
//                 )}
//             </div>
//         );
//     }
// }
