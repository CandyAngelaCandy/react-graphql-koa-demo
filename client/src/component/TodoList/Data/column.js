import React, { Fragment } from 'react';
import { TodoFinishedState } from '../../TodoItem/TodoFinishedState';
import { Link } from 'react-router-dom';
import { TodoText } from '../../TodoItem/TodoText';
import { TodoDelete } from '../../TodoItem/TodoDelete';

export const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    render: (text, record) => {
      return {
        props: {
          style: { background: record.color }
        },
        children: <div>{text}</div>
      };
    }
  },
  {
    title: 'completed',
    dataIndex: 'completed',
    render: (text, record) => {
      return {
        props: {
          style: { background: record.color }
        },
        children: <TodoFinishedState todoId={record.id} />
      };
    }
  },
  {
    title: 'todo',
    dataIndex: 'text',
    render: (text, record) => {
      return <TodoText todo={record} />;
    }
  },
  {
    title: 'creation time',
    dataIndex: 'time',
    render: (text, record) => {
      return {
        props: {
          style: { background: record.color }
        },
        children: <div>{text}</div>
      };
    }
  },
  {
    title: 'action',
    key: 'action',
    render: (text, record) => {
      return {
        props: {
          style: { background: record.color }
        },
        children: (
          <Fragment>
            <Link to={'/todo/' + record.id}>
              <button>detail</button>
            </Link>
            <TodoDelete todoId={record.id} />
          </Fragment>
        )
      };
    }
  }
];
