import PropTypes from 'prop-types';
import css from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

function Filter({ value, onChange }) {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.filter_container}>
      <label className={css.label_filter} htmlFor="filter">
        Filter
      </label>
      <input
        name="filter"
        type="text"
        value={filter}
        onChange={evt => dispatch(setFilter(evt.target.value))}
        className={css.input_filter}
      />
    </div>
  );
}

// function Filter({ value, onChange }) {
//   return (
//     <div className={css.filter_container}>
//       <label className={css.label_filter} htmlFor="filter">
//         Filter
//       </label>
//       <input
//         name="filter"
//         type="text"
//         value={value}
//         onChange={onChange}
//         className={css.input_filter}
//       />
//     </div>
//   );
// }

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
