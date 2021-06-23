import request from "superagent";

const mainURL = 'https://afternoon-plateau-07651.herokuapp.com/';

export async function getItem(id) {
    const { body } = await request
    .get(`${mainURL}/legends/${id}`);

    return body;
}

export async function getItems() {
    const { body } = await request
    .get(`${mainURL}/legends`);

    return body;
}

export async function deleteItem(id) {
    const { body } = await request
    .delete(`${mainURL}/legends/${id}`);

    return body;
}

export async function updateItem(id, legendData) {
    const { body } = await request
    .put(`${mainURL}/legends/${id}`)
    .send(legendData);

    return body;
}

export async function createItem(legendData) {
    const { body } = await request
    .post(`${mainURL}/legends`)
    .send(legendData);
    
    return body;
}
