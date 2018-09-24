export const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    align: 'center'
  },
  {
    title: 'completed',
    dataIndex: 'completed',
    align: 'center',
    render: (text, record) => {
      return record.completed ? 'yes' : 'no';
    }
  },
  {
    title: 'todo',
    dataIndex: 'text',
    align: 'center'
  },
  {
    title: 'creation time',
    dataIndex: 'time',
    align: 'center'
  }
];
