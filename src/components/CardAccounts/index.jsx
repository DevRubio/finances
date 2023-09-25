const CardAccounts = (props) => {
  return (
    <div className={`flex ${props.color} rounded-lg cursor-pointer`}>
        {console.log(props.color)}
      <div className="w-20 flex justify-center items-center">🪙</div>
      <div className="w-full flex items-start flex-col">
        <span className="text-gray-300 font-medium mt-1">{props.name}</span>
        <p className="text-white font-semibold mb-1">{props.balance} COP</p>
      </div>
    </div>
  );
};

export { CardAccounts };
