export const columns = [
  {
    title: 'id',
    dataIndex: 'id'
  },
  {
    title: 'completed',
    dataIndex: 'completed',
    render: (text, record) => {
      return record.completed ? 'yes' : 'no';
    }
  },
  {
    title: 'todo',
    dataIndex: 'text'
  },
  {
    title: 'creation time',
    dataIndex: 'time'
  }
];
