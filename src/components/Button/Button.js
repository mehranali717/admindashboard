const Button = ({ children, myAction }) => {
    return <button onClick={myAction}>{children}</button>;
};

export default Button;
