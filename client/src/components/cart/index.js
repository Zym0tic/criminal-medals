
function Cart() {
    return (
<ul class="nav navbar-nav navbar-right">
<li class="dropdown">
  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> <span class="glyphicon glyphicon-shopping-cart"></span> Cart <span class="caret"></span></a>
  <ul class="dropdown-menu dropdown-cart" role="menu">
      <li>
          <span class="item">
            <span class="item-left">
                <img src="http://lorempixel.com/50/50/" alt="" />
                <span class="item-info">
                    <span>Item name</span>
                    <span>23$</span>
                </span>
            </span>
            <span class="item-right">
                <button class="btn btn-xs btn-danger pull-right">x</button>
            </span>
        </span>
      </li>
      <li>
          <span class="item">
            <span class="item-left">
                <img src="http://lorempixel.com/50/50/" alt="" />
                <span class="item-info">
                    <span>Item name</span>
                    <span>23$</span>
                </span>
            </span>
            <span class="item-right">
                <button class="btn btn-xs btn-danger pull-right">x</button>
            </span>
        </span>
      </li>
      <li>
          <span class="item">
            <span class="item-left">
                <img src="http://lorempixel.com/50/50/" alt="" />
                <span class="item-info">
                    <span>Item name</span>
                    <span>23$</span>
                </span>
            </span>
            <span class="item-right">
                <button class="btn btn-xs btn-danger pull-right">x</button>
            </span>
        </span>
      </li>
      <li>
          <span class="item">
            <span class="item-left">
                <img src="http://lorempixel.com/50/50/" alt="" />
                <span class="item-info">
                    <span>Item name</span>
                    <span>23$</span>
                </span>
            </span>
            <span class="item-right">
                <button class="btn btn-xs btn-danger pull-right">x</button>
            </span>
        </span>
      </li>
      <li class="divider"></li>
      <li><a class="text-center" href="">View Cart</a></li>
  </ul>
</li>
</ul>
    );
};
 export default Cart;