import React, { Fragment } from 'react';
import { TodoFinishedState } from '../../TodoItem/TodoFinishedState';
import { Link } from 'react-router-dom';
import { TodoText } from '../../TodoItem/TodoText';
import { TodoDelete } from '../../TodoItem/TodoDelete';

export const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    align: 'center',
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
    align: 'center',
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
    align: 'center',
    render: (text, record) => {
      return {
        props: {
          style: { background: record.color }
        },
        children: <TodoText todo={record} />
      };
    }
  },
  {
    title: 'creation time',
    dataIndex: 'time',
    align: 'center',
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
    align: 'center',
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
