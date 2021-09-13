import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { clearDoneTodo, toggleFilter } from '../../store/actions/actions';
import Button from '../button/Button';
import './filters.css';

const Filters = () => {
  const filters = useSelector(state => state.filtersReducer);
  const dispatch = useDispatch()

  const handlerClearDoneTodo = () => {
    dispatch(clearDoneTodo());
  };

  const setFilter = id => {
    dispatch(toggleFilter(id));
  };

  return (
    <div className="filters">
      <ul>
        {filters &&
          filters.map(filter => (
            <li
              key={filter.id}
              onClick={() => setFilter(filter.id)}
              className={filter.isActiveClass ? 'active' : ''}
            >
              {filter.text}
            </li>
          ))}
      </ul>
      <Button text={'Clear Done'} onClick={() => handlerClearDoneTodo()} />
    </div>
  );
};

export default connect()(Filters);
