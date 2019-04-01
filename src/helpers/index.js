import faker from 'faker';

export const generateTask = (todo = faker.lorem.sentence()) => {
  return {
    title: todo,
    id: faker.random.uuid(),
    isDone: false,
  };
};

export default generateTask;
