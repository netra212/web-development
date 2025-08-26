import axios from "axios";
import { atom, atomFamily, selector } from "recoil";
import { TODOS } from "./todos";

// Asynchronous data queries. 
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        keys: "networkAtomSelector",
        get: async () => {
            await new Promise(r => setTimeout(r, 3000));
            const res = await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data;
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const allNotifications = get(notifications);
        return allNotifications.network +
            allNotifications.jobs +
            allNotifications.notifications +
            allNotifications.messaging
    }
});

// Sometimes we need more than one atom for our use case. 
// Create a component that takes a todo Id as input, and renders that TODO. 

// We need to store the Todo in an atom(can't use useState);

// All the TODOs can be hardcoded as a variable. 

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: id => {
        return TODOS.find(x => x.id === id)
    },
});