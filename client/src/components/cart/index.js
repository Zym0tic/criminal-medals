
function Cart() {
    return (
<ul className="nav navbar-nav navbar-right">
<li className="dropdown">
  <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-expanded="false"> <span className="glyphicon glyphicon-shopping-cart"></span> Cart <span className="caret"></span></a>
  <ul className="dropdown-menu dropdown-cart" role="menu">
      <li>
          <span className="item">
            <span className="item-left">
                <img src="http://lorempixel.com/50/50/" alt="" />
                <span className="item-info">
                    <span>Item name</span>
                    <span>23$</span>
                </span>
            </span>
            <span className="item-right">
                <button className="btn btn-xs btn-danger pull-right">remove</button>
            </span>
        </span>
      </li>
      <li>
          <span className="item">
            <span className="item-left">
                <span className="item-info">
                    <span>Item name</span>
                    <span>23$</span>
                </span>
            </span>
            <span className="item-right">
                <button className="btn btn-xs btn-danger pull-right">remove</button>
            </span>
        </span>
      </li>
      <li>
          <span className="item">
            <span className="item-left">
                <span className="item-info">
                    <span>Item name</span>
                    <span>23$</span>
                </span>
            </span>
            <span className="item-right">
                <button className="btn btn-xs btn-danger pull-right">remove</button>
            </span>
        </span>
      </li>
      <li>
          <span className="item">
            <span className="item-left">
                <span className="item-info">
                    <span>Item name</span>
                    <span>23$</span>
                </span>
            </span>
            <span className="item-right">
                <button className="btn btn-xs btn-danger pull-right">remove</button>
            </span>
        </span>
      </li>
      <li className="divider"></li>
      <li><a className="text-center" href="">View Cart</a></li>
  </ul>
</li>
</ul>
    );
};
 export default Cart;