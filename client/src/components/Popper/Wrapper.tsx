import styles from './Wrapper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
type wrap = {
    children: any;
    className?: string;
};

function Wrapper({ children }: wrap) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;
