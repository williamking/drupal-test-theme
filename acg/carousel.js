$(function() {
	Carousel = function(width, height, id, speed) {
		this.dom = $("#" + id);
		this.width = 800;
		this.height = 400;
		this.speed = "slow";
		this.moving = false;
		this.version = "V1.0";
		if (width)
			this.width = width;
		if (height)
			this.height = height;
		if (speed) {
			this.setSpeed(speed);
		}
		this.pages = this.dom.find(".pic-item").length;
		this.center = parseInt(this.pages / 2) + 1;
		this.attr = [];
		this.init();
	}

	Carousel.prototype.setSpeed = function(speed) {
		if (!(speed == 'fast' || speed == 'slow' || typeof speed == 'number')) {
			alert('Wrong type of speed!');
			return;
		} else {
			this.speed = speed;
		}
	}

	Carousel.prototype.getVersion = function() {
		console.log(this.version);
	}

	Carousel.prototype.init = function() {
		this.dom.find(".pic-item").css("width", this.width + 'px').css("height", this.height + 'px');
		this.dom.find(".slide-button").css("z-index", this.pages + 1);
		this.dom.css("height", this.height + "px");
		this.dom.css("width", this.width * 1.5 + "px");
		var callback = function(that, direction) {
			return function() {
				if (that.moving) return;
				that.rotate(1, direction);
			}
		}
		var that = this;
		this.dom.find(".left").click(callback(that, "right"));
		this.dom.find(".right").click(callback(that, "left"));
		this.xMargin = this.width * 0.5 / (this.pages - 1);
		this.initPics(0.8); 
	    this.updateAttr();	
	}

	Carousel.prototype.initPics = function(parameter) {
		var i = 1, that = this;
		var paras = [], x = 1;
		for (var j = parseInt(this.pages / 2) + 1; j >= 1; --j) {
			paras[j] = x;
			x *= parameter;
		}
		x = parameter;
		for (var j = parseInt(this.pages / 2) + 2; j <= this.pages; ++j) {
			paras[j] = x;
			x *= parameter;
		}
		this.dom.find('.pic-item').each(function() {
			var cover = $("<div></div>").addClass("pic-cover");
			$(this).append(cover);
			var callback = (function(carousel) {
				return function(e) {
					if (carousel.moving) return;
					var num = $(this).attr("number");
					carousel.rotateToCenter(num);
				}
			})(that);
			$(this).click(callback);
			if (i != parseInt(that.center)) {
				$(this).find(".pic-cover").css("opacity", 0.3);
			}
			if (i == parseInt(that.center)) $(this).css("cursor", "default");
			$(this).addClass("item-" + i);
			$(this).attr("number", i);
			$(this).css("left", (i - 1) * that.xMargin + "px");
			var h = parseInt($(this).css("height")), w = parseInt($(this).css("width"));
			$(this).css("height", h * paras[i] + 'px');
			//$(this).css("width", w * paras[i] + 'px');
			if (i <= that.pages / 2 + 1) {
				$(this).css("z-index", i);
			}
			else {
				$(this).css("z-index", that.pages - i + 1);
			}
			++i;
		});

	}

	Carousel.prototype.updateAttr = function() {
		for (var i = 1; i <= this.pages; ++i) {
			this.attr[i] = {
				height: $(".item-" + i).css("height"),
				left:   $(".item-" + i).css("left"),
				zIndex: $(".item-" + i).css("z-index")
			}
		}
	}

	Carousel.prototype.rotate = function(rotatePages, direction) {
		this.updateAttr();
		var p = 1;	
		if (direction == 'left') {
			rotatePages *= -1;
			p *= -1;
		}
	 	this.center = (this.center + rotatePages * (-1) - 1 + this.pages) % this.pages + 1;
		var originIndex = 1;
		this.moving = true;
		for (var i = 1; i <= this.pages; ++i) {
			var targetIndex = parseInt((originIndex + rotatePages - 1 + this.pages) % this.pages) + 1;
			if (i != this.pages)
				this.change(originIndex, targetIndex);
			else {
				var callback = (function(carousel) {
					return function() {
						carousel.moving = false;
					}
				})(this);
				this.change(originIndex, targetIndex, callback);
			}
			originIndex = parseInt((originIndex + p - 1 + this.pages) % this.pages) + 1;
		}
	}

	Carousel.prototype.change = function(from, to, callback) {
		var origin = $(".item-" + from), target = $(".item-" + to);
		var attr = {
			left: this.attr[to].left,
			height: this.attr[to].height
		}
		if (callback)
			origin.animate(attr, this.speed, callback);
		else 
			origin.animate(attr, this.speed);
		if (from == this.center) {
			origin.find(".pic-cover").animate({opacity: 0}, this.speed);
			origin.css("cursor", "default");
		}
		else {
			origin.find(".pic-cover").animate({opacity: 0.3}, this.speed);
			origin.css("cursor", "pointer")
		}
		origin.css("z-index", this.attr[to].zIndex);
	}

	Carousel.prototype.rotateToCenter = function(index) {
		index = parseInt(index);
		if (index == this.center) return;
		var rotatePages = Math.abs(index - this.center);
		rotatePages = Math.abs(index + this.pages - this.center) < rotatePages ? Math.abs(index + this.pages - this.center) : rotatePages;
		rotatePages = Math.abs(this.center + this.pages - index) < rotatePages ? Math.abs(this.center + this.pages - index) : rotatePages;
		if (parseFloat($(".item-" + index).css("left")) < parseFloat($(".item-" + this.center).css("left")))
			var direction = "right";
		else var direction = "left";
		this.rotate(rotatePages, direction);
	}

	var cc = new Carousel(1024, 640, "carousel");
	cc.setSpeed('slow');
});