import faker from 'faker';

export const generateTask = (todo = faker.lorem.sentence()) => {
  return {
    title: todo,
    id: faker.random.uuid(),
    isDone: false,
  } 
}

// import { generateTask } from './'

// export default generateTask;
// import generateTask from './'

