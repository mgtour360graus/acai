// Garden Gnome Software - Skin
// Pano2VR 6.1.2/17873
// Filename: mobile.ggsk
// Generated 2023-04-04T08:29:02

function pano2vrSkin(player,base) {
	player.addVariable('ht_anivar1', 2, true);
	player.addVariable('opt_3d_preview', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #6c6c6c;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 101%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_3.style[domTransition]='';
				if (me._rectangle_3.ggCurrentLogicStateVisible == 0) {
					me._rectangle_3.style.visibility="hidden";
					me._rectangle_3.ggVisible=false;
				}
				else {
					me._rectangle_3.style.visibility=(Number(me._rectangle_3.style.opacity)>0||!me._rectangle_3.style.opacity)?'inherit':'hidden';
					me._rectangle_3.ggVisible=true;
				}
			}
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._rectangle_3);
		el=me._controller2=document.createElement('div');
		el.ggId="controller2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 3px;';
		hs+='height : 46px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 181px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller2.style[domTransition]='';
				if (me._controller2.ggCurrentLogicStateVisible == 0) {
					me._controller2.style.visibility="hidden";
					me._controller2.ggVisible=false;
				}
				else {
					me._controller2.style.visibility=(Number(me._controller2.style.opacity)>0||!me._controller2.style.opacity)?'inherit':'hidden';
					me._controller2.ggVisible=true;
				}
			}
		}
		me._controller2.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2222=document.createElement('div');
		els=me._image_2222__img=document.createElement('img');
		els.className='ggskin ggskin_image_2222';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAFdklEQVRYhc2YS2xVVRSGv3v7pNyWtij1FdAEkTJASJSAmvgAB8rEFyEtGEGjGI1K1BBjTByokJigCYkDNTE+Bg4Mj5kYMXHQFJABVBItvmJFGEhBoEUCRX4H+z+c3dNzy71A1J3snHP2Wnut/6y1115r74IkLqDNARYBtwDTgWuAiaadAH4HfgJ6gW3Anqo1SKq0N0taI6lf1bd+z22uVF+hAovVAc8CLwPtHhu0JXqAfuA3YMi0ZmAqMBO4zZa9zLQjwFpgAzByMRa7QdLu6M93SlomqUNSm6RWSS22RMm92WOt5unwnJ2RnN2WXVb3eKDuk3TcggYkdUdgSpIaJdVJqpFUzPQa0yYYaKukdssYsMwh66gK2ApJIxawRdK0CFC9lRcqWCsF89Z7bq'+
			'tlbbHsEUkrKwV2v6Qznrjef9psJZWAGa83Sppkmeut44x1jgus0yaWpLcVXHcpAMUWrFNYg23WIevsjHnjqKwDviHsUVuAx4A/TasHVgGzgNNR7BSAY8BbjrikLQCWWGYc9rXA58AXQKO/3wceIOx1885Fa4TyBaMf8Dpoiax1h8ZvqyM5tZL2jMN71DKbFNw6TdKvpr2ojCubJR02sVthkcbueyJHwaCkA5J+kbQw4i1KesPy9ks6lpl3KuJrsq5u0w4byzlga0zYobAwSxlgK3OA7ZI0T9J1GrsGGyTNlLRY0sHMvJMRX7KdtEvabvqaGFiSZpb5DxozivKAnZb0nv88b6FPkfSVpLPmT54xsKLBxVbrT4DN9cAhC8vLZ49GgLZqtHs+9ryYf4akryOePvcsMBT2uBbLOGSeuUVgoSNmmyPibE7misc+Ap4Ehv39'+
			'MDA7w78KuN3vPeY5EEVm3P52HwG+9NiiIjA/EiAzZdveaHwQ+BRYTdg63gR2ZPg/APrcu4Bvgf2mDWR4z5L+eI+f85G01+ZbqBC+9TmuLEq6U9KiDH2O10jeGrvWPfnukPSgpOk5vA1eZ3cZy96CpMOEcmYG8AdwktGb6L/R6oEJwOXAj8CRIlAycZjgygsqaS9RS9ZtqRgNipBi/hetSITSz/8CXMH9nPeKwEF/TI0YsuBKhHJ4A9AWjb0G3FhG2WJgefR9E/AZ0J0DKvHcVD8PImmjI+FphVKkSWN383ujzXKpx5J6qk9jy+R7lKai5R7b5O/BnIifaN1PmWdjkXQPutXoa6I/SNpV0XsD8CrwvL9nZegFwuZ6pb/fBZ4j3VibM7ITfQXC4QVgR15KmuR9pVyu7FOa905I6srZl1oVUlXSTitNN9lc2Wj+USkpL4'+
			'm32bTnS+JDCom3XLValPSJ0jI9aTGwBoVKpk2ZJJ647EM/n7FJa+2yJAjyIrWPEABLgZYM7XpgJfADocLNa0XSKrZg3SkWjS0Uu/wHcZWxIsdicXskY6mt5+FPrHWFQi3W5fEjid7EYkPAOr+vswVqbZE64Lsyf520M5nvclaCEGy1hCCo8zPRvdZYyh5GNgGPE7LBiPtsoNMuSCbVAD8Du4C/IuVTCFHeRlqV1BAON7uAUwQ3jgDvEA4jfcDN5BxG0NjjW7vdWrLpL+YYV1AIqg6FqqNd6fFtWJnjW56A7IF3ssFNsv+rBVjwnDZJVytsC5NV5YE33h4ScJsVjljtSi9RmhTqspoyIAum1Zs3OeC2W9bmCFTFVwRJf8gmlsK5r8uCE/cmIEt2UZP7RI/FNz7JvC6lZ8hhSUvK6T+fG2Zq9OG1V2Ej7MiAzOsJvcNz'+
			'eiM5eyy7rO5qLu5eAVo9Nkg4OPQA3xOuNo+b1kK4+uwk5L67SS/ujgKvcwku7rL57yVJ+1R92+e5rZXqq8RieW2OLbGA9HI4LtGTy+HttmzVl8P/AOmxYXCzefbAAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2222";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 140px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2222.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2222.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_2222'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_2222.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_2222.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_2222.style[domTransition]='opacity 0s';
				if (me._image_2222.ggCurrentLogicStateAlpha == 0) {
					me._image_2222.style.visibility=me._image_2222.ggVisible?'inherit':'hidden';
					me._image_2222.style.opacity=1;
				}
				else {
					me._image_2222.style.visibility=me._image_2222.ggVisible?'inherit':'hidden';
					me._image_2222.style.opacity=0.7;
				}
			}
		}
		me._image_2222.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._image_2222.onmouseover=function (e) {
			me.elementMouseOver['image_2222']=true;
			me._image_2222.logicBlock_alpha();
		}
		me._image_2222.onmouseout=function (e) {
			me.elementMouseOver['image_2222']=false;
			me._image_2222.logicBlock_alpha();
		}
		me._image_2222.ontouchend=function (e) {
			me.elementMouseOver['image_2222']=false;
			me._image_2222.logicBlock_alpha();
		}
		me._image_2222.ggUpdatePosition=function (useTransition) {
		}
		me._controller2.appendChild(me._image_2222);
		me.divSkin.appendChild(me._controller2);
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=2.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 3px;';
		hs+='height : 43px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 295px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller.style[domTransition]='';
				if (me._controller.ggCurrentLogicStateVisible == 0) {
					me._controller.style.visibility="hidden";
					me._controller.ggVisible=false;
				}
				else {
					me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
					me._controller.ggVisible=true;
				}
			}
		}
		me._controller.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._image_3333=document.createElement('div');
		els=me._image_3333__img=document.createElement('img');
		els.className='ggskin ggskin_image_3333';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAF7klEQVRYha2YW4iWRRjHf9+3u+q6u7qeTayNLDxRaFCYWUkqdiVuELSKpVEQRVIpZmJXRV6VFdEBL6QoEUTUi8rQi4LS1Q67IKIrUiohZXnIVUvd3X8X8x+/2df3213NB4b3MM/hP88z88wzU5DEddAUYDYwHbgdGAvUuO888BtwGNgF7ARar9mCpL62OkkrJB3UtdNBy9b11V6hDx6rApYCq4Ch/veXPfEdcBA4BrS7rw64BZgAzLBnh7vvFPAm8B5w+f94bLyklmTkeyQtlDRK0tA+tlGW2ZPoabHu6/LYfOBTe+AY8CqwvTf39kKPAGsIHj0HLAK25jEWyyhYDGwyqG3Ag2VACbgAdLn1RtutaxtQaxtLcjlz3NgoqcMuf0vSMElDJFVIqvSz2N'+
			'dJLKmQyMTwDrNu2VZjVi6rZKKkdgustZKiFRckDfbKqjR/UVK9+cZJmivpzpx5NsSywy0f/6+1rXbbzgVWpdJE3+JRFRLjg22gfw6oyZI+lHRR0nLz5bUUaPTcZttsMYargC0zw1FJDRaskFRjgNUqhTB+D5H0qKSfVaLlkvq5VfnZ361a0iDLjbaNBklHEtluwOoknXTnApVCGEFkQ16UdKukNZL+UXf6XNJMhdBUJ/xRz3gPdlDiwQWWPWksV4CtcEdzwhwnex6wUZLWqWc6LOkjBY/WqjQtau3JoZJuS+ztttyKFFjcZhYmjIWkZYENlLRUIewpdUk6LelS8q9d0sf2YI2kEZYfoeD1rNcORmBT/eNPSSMTUDGMecBQ8OhDkr7MAPtAUpO99XvSt1vSFHsrAmxIgI00BkmaWgRmOaXtBDqSxBuTb7mtoRP4FngK'+
			'WA2cAQrAcWAj8ALwZJKYpwFrgRHWWXCL1AHs8PvsogUgbMiRChauKgMqpT8I28xi4H3gJ8t2AF8b+Bb/mwk860F35Qw6YpiGpH123yx1n/g9hbFcq1GSi5I2UtKPtnPaIR2emWNDJT1snn1FYIxRHkuQ1wAVOSPKUpHu4ThP93KmYF0n7M1zQD0wp4y+iGFMkbCZYqFUYWcZ4QpKIe4ibPR5xUAEfNHvGxLDc/0/O/CIoTZVmDJV2FgdUGnw9cAAg6kEqs3XTn5lEQfQaWCXgd3+nkyoSjpy5MDGr6DM9BUSns+A/cDz/r7kEfdEHRnDlYQV25kMsjIjcyV6RTNDKN6yVCB4ZjphLj4A9KNUf/VWg6X9FdYVvVdF9/mZYjheBA75Y2KGKYa2APzg97FWqoSnpwUS006X5e4xoCPkz8sJfh4qAs3+uL+MYhJgd5ThK0'+
			'cp6EnAXX7/vgywGX42FwkZH8ISTmOeuvkrwohrgJfMlw1DStm+ArCMsJg6gS9yZCoppZGdRaAFaCMcsdL80kFpxAc8gArCUn8xozRuYRFQOg3qgSeARhv/hrA7ZMHHY14b0BIz80pn3OZMJh6pUKUOkDRP0i/m+1vSKyqVRXGnyKv3n5Z03HJnvcNU6+rqIpY9K1WmUGxS99KnTqFMuUmhtopnggsKJXiTQtGXLdPnSdpgMFI4dDynUNEOyABrMs8pZQpFFMpaKZS5DQm4EWauN9BGSftVopOSWiVtUih5NkraK+lEwnNU0iJ7doAHcrPtNKiH0jp7GNms7iGtV3B/lULtPknSuxnjeXRK0ieSpils8LVuEdBolQ4jrUoKgOxJfCKwl5CB3wFeT/qqCCszLvN+QANwN3AvMA4YCPxLuO1p9iT/1f+63B8XyhngNS+k'+
			'84QcdyAay7siaCSckCuAtwmXIJGpv1ta6MXV1WnjaZGZ3RmKlPbIVcDLlnuMULNdoXJ3F0uAdQa31aNqz2O8DqojRGO+QT0DrM8ylbu7WA88TnDxfEIJPfcGgJprXfOtuykPFNDrNdQET8pIuxROM9d6DbXAspFarfu6rqEixYu71YQsDuHibgehRj9AmOxn3TeIsNlPJOx9cyhd3J0B3uAGXNylrV4hK7f1kiLyqM2y9X211xeP5dEUe+I+SpfDaYkeL4d327PXfDn8H+4lLP/y2mLHAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3333";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 38px;';
		hs+='left : 254px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3333.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3333.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_3333'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_3333.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_3333.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_3333.style[domTransition]='opacity 0s';
				if (me._image_3333.ggCurrentLogicStateAlpha == 0) {
					me._image_3333.style.visibility=me._image_3333.ggVisible?'inherit':'hidden';
					me._image_3333.style.opacity=1;
				}
				else {
					me._image_3333.style.visibility=me._image_3333.ggVisible?'inherit':'hidden';
					me._image_3333.style.opacity=0.7;
				}
			}
		}
		me._image_3333.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._image_3333.onmouseover=function (e) {
			me.elementMouseOver['image_3333']=true;
			me._image_3333.logicBlock_alpha();
		}
		me._image_3333.onmouseout=function (e) {
			me.elementMouseOver['image_3333']=false;
			me._image_3333.logicBlock_alpha();
		}
		me._image_3333.ontouchend=function (e) {
			me.elementMouseOver['image_3333']=false;
			me._image_3333.logicBlock_alpha();
		}
		me._image_3333.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._image_3333);
		el=me._move_right=document.createElement('div');
		els=me._move_right__img=document.createElement('img');
		els.className='ggskin ggskin_move_right';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADl0lEQVRYhb3Yz2tdRRQH8E+uEBWbmNqNP7IotCIVUxNaXNpGgksl6MJF24huVCSx+ge4Vqm1WBAXWktTXfijCDULxRaz1Kq1AUE0IBilm7YmaYl14XExc83LIz/ufS/xwDBv7n1zvt97Zs6ZOacjItSUm/EwHsJObMet6MI8ZvELLuAMPsdCLYSIqNr6IuJ4RMxHPZnP8/qqYnVUsNRdeB2Po8jPvs0WOIefcSlbqQtbcDd2Z4vuynP+wUd4Eb+3Y6kDDZZZiIi3I6I/IrpqtP48b6HBcgdWw13pxQ0RcbRhCU5HxI6aZJrbvRHxWYPOoxmnEqmOiBjPE/+KiNE2yTS30Yi4nvWPZ7w199SbeB5X8QQm19p0LchevI9NGW+08WUzqX04gb/xGL7aAE'+
			'Kl7MHH6MR+jC9Hqhc/Sh70At7dQEKlPIU3JM/dIXtl0fCHQ5nQxP9ESMY5nXEPlQ9LS/XhPK5LcWWmgsJBPImRNon1SnHvRvRjqrTUS5LVxisSIi3xMD5FTxukZjJukXnoiIhbcFHyhAFMV1TWg+OSxc7jEfzZIrFt+F7y+NsLDGVC52oQkgk8ilOS2SextUVS0xl/E4YK6UtJJ3orMoJjmVA7xL7M/WCB+/Pg6xaVwRgOS0s6afFD68g3ud9ZSOsJP7VBCl7OrdxrwzXnl/jbCmzOg0ttkiJZa6xFYpdzv7kjFkN69zqQKmU4kyKRPFZx3hwpNlzNDzatE6EeKajCr5J3VpGu3M8XuJIHW9aJUBm7zuJB1WPXbbm/UliMTfesA6HS885KoaJOMC3xpwv8kAcPtEFoq8UYdUoKqnWje4l/oZC+ipQytSKN0fyw1g/o'+
			'odyfaT77dknZSVUZlPZQjxSjDrdIaDu+k+5VdxS4JqU+8EwNRaXb91iM6K3Ks7n/BNeWu0/txm8VFJXBcUR1t19OeiUrdWq6T03hQyklf62isjHJ5dshBK/ipow/xcp39IN4p02wKvK0tOwr3tFn8Fz+/YqUbWyk7Mk4pD31XypfNP1xHG9J6/uBlJ9thOzN+jtxBCeXvF0hZT+ZM9jrG5AhjzVkyCeWy5BXqiV0RMSRhrx/ItanljDRoPPIcoRWI1W2/RExl5WUVZeBmmQGYmnVZS4i9q2GW6U+dafkIavVpy5Ld6Fu6bRfrT51EH+siriGpRrbfRHxXkTMRj2ZzfPWtZLXLGXNc9DSmmd3tlZzzfMLNWue/wJJBIbcm1/jVAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="move_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 212px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._move_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._move_right.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['move_right'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._move_right.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._move_right.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._move_right.style[domTransition]='opacity 0s';
				if (me._move_right.ggCurrentLogicStateAlpha == 0) {
					me._move_right.style.visibility=me._move_right.ggVisible?'inherit':'hidden';
					me._move_right.style.opacity=1;
				}
				else {
					me._move_right.style.visibility=me._move_right.ggVisible?'inherit':'hidden';
					me._move_right.style.opacity=0.7;
				}
			}
		}
		me._move_right.onmouseover=function (e) {
			me.elementMouseOver['move_right']=true;
			me._move_right.logicBlock_alpha();
		}
		me._move_right.onmouseout=function (e) {
			me.elementMouseDown['move_right']=false;
			me.elementMouseOver['move_right']=false;
			me._move_right.logicBlock_alpha();
		}
		me._move_right.onmousedown=function (e) {
			me.elementMouseDown['move_right']=true;
		}
		me._move_right.onmouseup=function (e) {
			me.elementMouseDown['move_right']=false;
		}
		me._move_right.ontouchend=function (e) {
			me.elementMouseDown['move_right']=false;
			me.elementMouseOver['move_right']=false;
			me._move_right.logicBlock_alpha();
		}
		me._move_right.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._move_right);
		el=me._move_left=document.createElement('div');
		els=me._move_left__img=document.createElement('img');
		els.className='ggskin ggskin_move_left';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADh0lEQVRYhbXYy29VVRQG8F8vBENsEXBiRBOTSozEasHHEKyoQxOiIxUbdcYALP4FTAk+GpsYB2gbqg6EaAwyMIaqQ4NPBsYoSROfE6AvUnHgcrD3yT1eess5995+yc7OOffstb679t7r1RcRamIjHsMjuBd34iZswgLm8Qt+wAw+xXItDRFRdQxFxGREzEc9zOd191TV1VfBUrfiNTyFRn73dbbAOfyMS9lKm7AV2/EAHsf9ec2/OIkx/NGNpZ6NiIX8j5cj4q2I2BkRAzXGzrxuOctZiIj9q+lt90NfRIyXtuBMROyoSaZ13J3lFBjPeiqR6ouIE3nh1Yg41CWZ1nEwy42IeDci1rVyWOlMvY5DWMLT+Px6h64DPIz30I83caD8YyupZzCNf/Akvl'+
			'gDQgX24BQ2YH/Wew2pbfgRA9INOb6GhAq8KN3sRezAbzSvOLySCZ3uAaFhbK7w3XGcyXqPFS8LSw3hO2nbdhWMO8Q+TOFDjFb4/nbJ390g/ZnzhaVelqx2oktCz2dCc/io4ppfpfPUwGGSpW7En5IJd0lxqxOM4UgmNCrFvarYLkWJJdzSwN5M6JsuCB0pEXqiJiFSqDonuYhHG1K0h886JDQlWWkWu6Wz2QnO5nlkvZR+wFc1hWzOhEZKhOY6JFTWf18Dg/nhpw4JzfSAUFn/4HpsyQ+XahD6EndkQqM9IAQX87ylIR1ykletgn2ZEEz2iBDp5kF/o0RmoM3HrXhH0ylOSb6pF+jP81IDl/PD1hoCCm89h3Hp9nWLm/N8uYEL+eGumkLKxAo/1Q0K/RcaUtUBD3YgqHzzxiSrdYqH8vx9Q9P77u1Q2GwmNqsZ+zpB'+
			'4cRnitj3l3TQdmpuZ11sxsdSpK/rKgbxrVLsuyJlgLSkpTVRjnsj6lms0HsKV1rzqatSndZN+iITmlQtMN8mZQjX5FPn8YFUkh/tkhD1UpdjWe/JzKNtjv4S3u4BuevhBal6apuj/665t0elamMtsUdzVw4oHZlGy4fTeEMqe96X6rO1wO4sfwMmlMortK2Qp0sV8sE1qJD/zvKnVyrd2/US1kXERKnu/yR600s4XZI5sVLJvhqpYjwXEYtZSNF1Ga5JZjj+33VZzHK76k9tw6tW709dlG7QgBTtV+tPHZYuVXtcx1KtnbypkuWqYjGvG6qqq4qlWrExW6C15zmQrVXueZ7VQc/zP+hYjLDyeLAbAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="move_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 170px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._move_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._move_left.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['move_left'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._move_left.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._move_left.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._move_left.style[domTransition]='opacity 0s';
				if (me._move_left.ggCurrentLogicStateAlpha == 0) {
					me._move_left.style.visibility=me._move_left.ggVisible?'inherit':'hidden';
					me._move_left.style.opacity=1;
				}
				else {
					me._move_left.style.visibility=me._move_left.ggVisible?'inherit':'hidden';
					me._move_left.style.opacity=0.7;
				}
			}
		}
		me._move_left.onmouseover=function (e) {
			me.elementMouseOver['move_left']=true;
			me._move_left.logicBlock_alpha();
		}
		me._move_left.onmouseout=function (e) {
			me.elementMouseDown['move_left']=false;
			me.elementMouseOver['move_left']=false;
			me._move_left.logicBlock_alpha();
		}
		me._move_left.onmousedown=function (e) {
			me.elementMouseDown['move_left']=true;
		}
		me._move_left.onmouseup=function (e) {
			me.elementMouseDown['move_left']=false;
		}
		me._move_left.ontouchend=function (e) {
			me.elementMouseDown['move_left']=false;
			me.elementMouseOver['move_left']=false;
			me._move_left.logicBlock_alpha();
		}
		me._move_left.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._move_left);
		el=me._move_up=document.createElement('div');
		els=me._move_up__img=document.createElement('img');
		els.className='ggskin ggskin_move_up';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADeElEQVRYhcXYTWhdRRQH8F+uUCsmaa0boRUCVrRCv6K4tE1Ql35AXYgfpa6ULqK0+9Ktom3jx8KFbdr6AYoRRQXRRl2qldp2oVghUOtCaE0TbdCFx8XM5b0+38t7Ny8ffxjm3jtz5vzvmZkzZ05PRKiI63EvhrAJt+AG9GEGf+AXnMYJfIG/KmmIiE7Lxog4EhEzUQ3TWW5jp7p6OrDUWryIR1Dkb99lC3yLn3ApW6kPa3Ab7s4WHcwy/+Jd7MGFbiz1eP7TiIgrEfF6RGyJiL4KZWuWm62z3GNz6W3V0BMRo3VT8FFEbKhIprFsyOOUOJj1dETqmog4ngX/joiRLsk0lmfzuBERx5oRa7amXsFu/IlH8VW7RTcPbMPb6MUoRuobG0k9iTH8gx34ch'+
			'EIldiO97ACT+B4M1Jr8aPEfgSHF5FQiadwUNq5t+M3alscXsqEPlkiQvAGPpVcyYHyY2mpjTglTdudOL9EpOBmnJSmcQvOlJbaK1nt6BITkvUdzfr3kCx1HX6Xpm6rdG7NB7swjql5yK7H95jGTQXuz4ROdkHoYRzC11g9D/lzWX8/7iswnBs+64LQWH4eyM/zIVbqHy6k8IN0yFbFkGQh2ImJ/G2spURrlPo3FdJ8ws8VBxlQs8qItJ66IVbqX19gVX65WJFQuX72qfm1qUxsUprW/RXGvJTrVYXkuEhetROsxoe5PqDO6dURuycTey6XTjCd6/6ijkxfi87NCA1I1tnXot8UHsj1fsldtEN/Sa7A5fxyYweCY5LXHddwsjfBZB2xQ9J0zoU1ub5cSD4Cbu2A0JC0kHe26VviVO47pfZDrVDqP1dItw64q42CIxUJ'+
			'lZhQ252Tc/Qr9Z/uiYgH8YHkUYcqKlxITEjBwEMLefZ1g/+dfbN4Pzc+swyE4Olcj2O2WTw1iF+XkNA6yUorsBlny3jqjBQvr8QLS0iIdNFdmfWfZflj9F2SD2sZo1+QrlbwvHRULCa2q83K7pJQIylSWPoqrsU70v1sMbANb0nraBTHrmpd5hvym81uyHPlEl6uu/d/HN3nEu7I45R4LRug4wTHQmZdBrPclTzOdB63q/zUOmnb7nB1fuoEvpHyUxel3EOvFG2U+alhtTOtzE/t1c4PtrHUQmTyZiLicCxwJq8R9TnPzWo5z95srTLn+YN0yH6uYs7zP1AOiuX0JYOSAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="move_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 128px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._move_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._move_up.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['move_up'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._move_up.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._move_up.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._move_up.style[domTransition]='opacity 0s';
				if (me._move_up.ggCurrentLogicStateAlpha == 0) {
					me._move_up.style.visibility=me._move_up.ggVisible?'inherit':'hidden';
					me._move_up.style.opacity=1;
				}
				else {
					me._move_up.style.visibility=me._move_up.ggVisible?'inherit':'hidden';
					me._move_up.style.opacity=0.7;
				}
			}
		}
		me._move_up.onmouseover=function (e) {
			me.elementMouseOver['move_up']=true;
			me._move_up.logicBlock_alpha();
		}
		me._move_up.onmouseout=function (e) {
			me.elementMouseDown['move_up']=false;
			me.elementMouseOver['move_up']=false;
			me._move_up.logicBlock_alpha();
		}
		me._move_up.onmousedown=function (e) {
			me.elementMouseDown['move_up']=true;
		}
		me._move_up.onmouseup=function (e) {
			me.elementMouseDown['move_up']=false;
		}
		me._move_up.ontouchend=function (e) {
			me.elementMouseDown['move_up']=false;
			me.elementMouseOver['move_up']=false;
			me._move_up.logicBlock_alpha();
		}
		me._move_up.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._move_up);
		el=me._move_down=document.createElement('div');
		els=me._move_down__img=document.createElement('img');
		els.className='ggskin ggskin_move_down';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADg0lEQVRYhcXYS4xURRQG4K9bgxoYGCFxoZiQiPERQUR0KQ8NSxMTXRg1hJ2vCET2hq0vHIwuXAiMqAtRo4SYGAPq0gDqsNGICQlq3IDDDEJk4XFx6jpNz/R03x5m+JPK7ep7T53//nXuqarTiAg1MR8PYT3uxi24HgtwDn/hV/yIw/gKf9fyEBG9thURsTsixqMexiNiT7HvyVejB6WW4lU8hmb57wgO4Tv8jNNFpQVYgttwPzZgTbH5F/vxIn6biVJPRsRYeePzEfFORKyOiIEabVWxO1/GGSvjdvTb6cZVEfF2yxQcjIg7a5Jpb3eUcSq8GRGNXkk1IuL9YvhPRGydIZn2tqWMGxGxrwjQNaaG8EKJkcfxTbeg6wNr8aGMwbfwfOvNdlJPYRgX8S'+
			'i+ngVCFR7Ax7gGm4rfSaRuxE8YwBbsnkVCFTbLmTmH2/E7E5847CyEvpgjQoqfg3IaX6/+rJS6S2bgi1itWx65vFiKY5iHVTheKbVdqjY8x4QUf8PF/3ZSqevwJxZKlU7MMSly/fxextYNTWwshI5eIULkAn5UxtbGplzt4ctpjAaxF4/04XAQn7X46YTK/4arsbJ0jkxjsKwQWo9RuSXpFXt7tKv8r2xieen8Mo3BDzLBVYqtqknocLGfDpX/5U0sKp0zXYw+lUl1EJ9L9abDkFS3eqFuOF2uixoxkdIX9mAI27ADJ+VSMTrFMzvKc9M9MxXGyNwwVpPUztKW4VupXDvpbYXIwzUIDZTreBNnS2dxj8bwkpzOZTJuKmKbpUqjUqGTNcZcUq5nmyZy0601BiDj5LAM5CpdDBVCm2oSavV/oomR0lnT4eE6xMiPoU7K'+
			'qFD5H2nKAwCZ2euiXZVNclr7QeX/0OVa+wbl9PW75Zm09l0w8XZP9zno6AwIwTPl+gkuVPupFTLJXcS9ODUDB3Vxs1yMJ+2njsuD4rXy4DmXeKX43V94dNyjb8W7c0Co6x79Dzxbfr+MdbNMaJ1UCZ6rCLWTgn3YJef3A3k+mw2sLePPk+e+4Uvudjghv3clT8idagmNiHij5dx/ILIWMNNawoGWMXdFjVpCa3siJqouFyKrJ/fUJFO76tJLfeomvObS+tQxWaGr6lNnMC6/3MWyPnUfHnRpfeojWZ/6P6inRBel2it5e1qU6xWzUslrx/yiwAZ56KhqngNFrarmOaLPmud/5A2NPRp0ajQAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="move_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 86px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._move_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._move_down.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['move_down'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._move_down.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._move_down.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._move_down.style[domTransition]='opacity 0s';
				if (me._move_down.ggCurrentLogicStateAlpha == 0) {
					me._move_down.style.visibility=me._move_down.ggVisible?'inherit':'hidden';
					me._move_down.style.opacity=1;
				}
				else {
					me._move_down.style.visibility=me._move_down.ggVisible?'inherit':'hidden';
					me._move_down.style.opacity=0.7;
				}
			}
		}
		me._move_down.onmouseover=function (e) {
			me.elementMouseOver['move_down']=true;
			me._move_down.logicBlock_alpha();
		}
		me._move_down.onmouseout=function (e) {
			me.elementMouseDown['move_down']=false;
			me.elementMouseOver['move_down']=false;
			me._move_down.logicBlock_alpha();
		}
		me._move_down.onmousedown=function (e) {
			me.elementMouseDown['move_down']=true;
		}
		me._move_down.onmouseup=function (e) {
			me.elementMouseDown['move_down']=false;
		}
		me._move_down.ontouchend=function (e) {
			me.elementMouseDown['move_down']=false;
			me.elementMouseOver['move_down']=false;
			me._move_down.logicBlock_alpha();
		}
		me._move_down.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._move_down);
		el=me._zoom_out=document.createElement('div');
		els=me._zoom_out__img=document.createElement('img');
		els.className='ggskin ggskin_zoom_out';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADEklEQVRYhcXYy49URRQG8N9cDGYiPQbcGNHVSIzE0Rl8LMH3P6ArFRe6YwGK/wXxRZzEuNBoGHWh7JCFMaAuDSo6C2OUlc8NkJkeMuKC46Kq0tfLdE83TXd/SaVy7+065+tTr/OdqYgwIKbxBB7FvbgTN2MGq1jBr/gRp/E51gfyEBH9trmIeD8iVmIwrORx9/Tra6qPSN2GN/A0qvzu2xyBM/gFF3KUZrADu/AAnsT9ecwVfIqX8ecwkXouIlbzP16PiHciYiEiWgO0hTxuPdtZjYj9vfx2+zAVEUdrU3AyInYPSKbZ7s52Co5mP32RmoqIY3ng5Yg4NCSZZjuY7UZEfBgRW5ocNlpTb+IQ1vAMvtxs0V0DHsZH2Ia3caD+sUnqWSzhXzyFr0ZAqG'+
			'AfjmMr9me/V5HaiZ/QknbIuyMkVPCitLPb2I3f6WxxeC0TOjEmQrKfk9nvq+VlidQczkrTtkdmPCbcIZ13N2IeyyVSr0hROzZmQvCbtJ4qHCZF6ib8JYVwj3RvjRu7pFtiDbdWeCwT+m5ChEhX1RnpiHi8km57+GJChApO5f6RSko/4JsJkSko/u+rMJsffp4QmYLif7bC9vxwYUJkCs7nfvtUdI70mU0GzePrIZzulc7CXlglnQ3t/KI1hMPrgW25X7sBFyVCO3QIboSzNo/mMLgl9xcrnMsPd43QYT8o/s9VkuqABydEpuCh3P9QSTKIdLJPEuUQP13uvr+lhbagM53jxCy+V7v7LkkZII20dIwofo/jUjOfuizptHGmL7dLGcJV+dQyPpEk+ZExEiJlnNOSUF2me47+Et4bA6EXJPXUNUf/Q2duj0hqY5TYpzMr'+
			'B9SWTNX44RLekmTPx5I+GwX2Zvtbsagmr9BVIS/VFPLBESjkf7L9pY2ke7dawpaIWKzp/s/i+tQSTtRsLm4k2XuRKu35iGhnI6XqMj8gmfn4f9Wlne0OVZ/aidf1rk+dl3ZQS7rte9WnDkubqjs2iVSzkvdBLXL9op3HzfXrq59INTGdI9CsebZytOo1z1Ouoeb5H1FfY9pYgBzEAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zoom_out";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 44px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_out.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_out.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['zoom_out'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._zoom_out.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._zoom_out.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._zoom_out.style[domTransition]='opacity 0s';
				if (me._zoom_out.ggCurrentLogicStateAlpha == 0) {
					me._zoom_out.style.visibility=me._zoom_out.ggVisible?'inherit':'hidden';
					me._zoom_out.style.opacity=1;
				}
				else {
					me._zoom_out.style.visibility=me._zoom_out.ggVisible?'inherit':'hidden';
					me._zoom_out.style.opacity=0.7;
				}
			}
		}
		me._zoom_out.onmouseover=function (e) {
			me.elementMouseOver['zoom_out']=true;
			me._zoom_out.logicBlock_alpha();
		}
		me._zoom_out.onmouseout=function (e) {
			me.elementMouseDown['zoom_out']=false;
			me.elementMouseOver['zoom_out']=false;
			me._zoom_out.logicBlock_alpha();
		}
		me._zoom_out.onmousedown=function (e) {
			me.elementMouseDown['zoom_out']=true;
		}
		me._zoom_out.onmouseup=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.ontouchend=function (e) {
			me.elementMouseDown['zoom_out']=false;
			me.elementMouseOver['zoom_out']=false;
			me._zoom_out.logicBlock_alpha();
		}
		me._zoom_out.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._zoom_out);
		el=me._zoom_in=document.createElement('div');
		els=me._zoom_in__img=document.createElement('img');
		els.className='ggskin ggskin_zoom_in';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADLklEQVRYhcXYzW9UVRgG8N9cEkxDpxrcWWVTjZFYLSguxe8/QFmpaKI7FqD4Bxi3REVCE3ShkVB1ocQNsjAEdGvUqF0Yg2z82im2HVJx4cvinJteL53hzpSZeZKT0zvnnvd9+p6P+z5vKyL0iQk8jkdwD27HjZjCMpbwM37AOXyO1b48RETTNhsR70fEUvSHpTzv7qa+Wg0idQsOYw+K/Ns3OQJf4zz+ylGawlbcgfvxBO7Lc/7DJ3gZf2wkUs9GxHL+j1cj4p2I2BER7T7ajjxvNdtZjoi9vfx2G2hFxJHKEpyOiO19kqm3u7KdEkeyn0akWhFxIk+8HBEHNkim3vZnuxERH0TEpjqH9fbUWziADp7GF9fadAPgIXyISRzDvupgndQzWMC/eApfDo'+
			'FQid04ic3Ym/1eRWoaP6ItnZB3h0ioxIvSyV7BdvzG2hGHNzKhUyMiJPs5nf2+Xv5YRmoW30nLtlNmPCLcJt13N2AOi2WkXpGidmJAQq9Jl+fxAeb+Ku2nAgflP7bgyfzCsQGMXg+8nfs92FLgUWlNv5U+pOPAeWkJJ/FYIX3t4cyYCJU4m/uHCyn9gK/GRKZE6f/eAjP54acxkSlR+p9pRcSytKempUusF37BTQM63Ya/e4xPSilNp8iENCA0bHRyP1lYI9Pu8nIV26RErt4O5/FPu4xP6R0lUqTIkbqYH7Y2IDVM3Jz7iwUu5Ic7x0SmROn/QiGpDtg1JjIlHsj994Ukg0g3+zhRXuLnCukm70jqY6brlOFiJvvv4EyBS1IGSC0t7QOvSifs+QHnl35P4lI9n7os6bRR5lO3SjryqnxqER9LkvzQCAmRMs4JSagu'+
			'0j1HfwnvjYDQC5J66pqj/25tbQ9JamOY2G1tVfapbJmi9uICjkqy5yNJnw0DD2b7mzGvIq/QVSEvVBTy/iEo5H+y/YX1pHu3WsKmiJiv6P7P4vrUEk5VbM6vJ9l7kSrbcxGxko2UVZe5PsnMxf+rLivZ7obqU9N4U+/61J/SCWpLX/te9amD0qHqjmtEql7JO16JXFOs5HmzTX01iVQdEzkC9ZpnO0erWvM8a4Ca5xVfQGHC9+5tQwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zoom_in";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 2px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_in.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['zoom_in'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._zoom_in.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._zoom_in.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._zoom_in.style[domTransition]='opacity 0s';
				if (me._zoom_in.ggCurrentLogicStateAlpha == 0) {
					me._zoom_in.style.visibility=me._zoom_in.ggVisible?'inherit':'hidden';
					me._zoom_in.style.opacity=1;
				}
				else {
					me._zoom_in.style.visibility=me._zoom_in.ggVisible?'inherit':'hidden';
					me._zoom_in.style.opacity=0.7;
				}
			}
		}
		me._zoom_in.onmouseover=function (e) {
			me.elementMouseOver['zoom_in']=true;
			me._zoom_in.logicBlock_alpha();
		}
		me._zoom_in.onmouseout=function (e) {
			me.elementMouseDown['zoom_in']=false;
			me.elementMouseOver['zoom_in']=false;
			me._zoom_in.logicBlock_alpha();
		}
		me._zoom_in.onmousedown=function (e) {
			me.elementMouseDown['zoom_in']=true;
		}
		me._zoom_in.onmouseup=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.ontouchend=function (e) {
			me.elementMouseDown['zoom_in']=false;
			me.elementMouseOver['zoom_in']=false;
			me._zoom_in.logicBlock_alpha();
		}
		me._zoom_in.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._zoom_in);
		me.divSkin.appendChild(me._controller);
		el=me._controller3=document.createElement('div');
		el.ggId="controller3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 38px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 82px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller3.style[domTransition]='';
				if (me._controller3.ggCurrentLogicStateVisible == 0) {
					me._controller3.style.visibility="hidden";
					me._controller3.ggVisible=false;
				}
				else {
					me._controller3.style.visibility=(Number(me._controller3.style.opacity)>0||!me._controller3.style.opacity)?'inherit':'hidden';
					me._controller3.ggVisible=true;
				}
			}
		}
		me._controller3.ggUpdatePosition=function (useTransition) {
		}
		el=me._hiidemenu0=document.createElement('div');
		els=me._hiidemenu0__img=document.createElement('img');
		els.className='ggskin ggskin_hiidemenu0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAADz0lEQVRYhb3YTWhcVRQH8N9MUhHMSKhCoZTGRTHJRtKFtWpBig1xZywIGqloUaGLatAqfnWl6EKRqrixixa3gh+7ggERQm3cJLppUlzYUroSFdtiNZleF/e+zMs0M29mXvQPjzvv3XvO+c+595577qmEEPSAMezDfdiBbbgl9V3FRfyM05jBQtcWQgidPrUQwishhMXQPRaTbK1Te5UOPLYJz+N1bE7ffk2emMUiLuBy6qthO0awJ3n29tT3G97BR1gu47HhEMJ87p/PhRCeCCFsCSFs7vDZkmTmcnrmk+6ePDaJz5IHLuA1nCpybwEewruiR6/gAL5ab2ArYk/hOPrxNV7QmKqyqOFDPIwVPIcTnRB7BJ+jDx+Ia6KnrdsGFXHNvog6HsWX7YiN4g'+
			'cM4Bje2mBCzTiKaXFad+HsesQ2JVJj4rw/Y+M91YwKPsV+Mdbtku3W3E54Ke2Y8yGEoaadVYS9adyODsY279qhEMIvqe9IxqeamNfEOSfuvm4X+kpqgzgt3eByk+0aVokdEoPnnHIhYTmnsxucwpnE4VCe2MHUflyCVEasV2S2DxKJ7cSweMx8U46XegnZmcRhGDureDDXsdJKqkPcVEJ2RcMx+6rYnV5mS1GKqIthp1dkHHZXRdcRs4SyqOtt8WfIONzZj63p5UIbgW1t+iq4ln6v4I4244oCdsZha794/NA+/vxVoDBvvI7rIskgTm2fmBBcay26hsNAf+5ju39zF/5OBvs0piszdj71V6z1bqazkmRr+KmA3KriK2JgGxAzzPXwbYGevcngzWKQrrQZe1ubvtXZq+JSetleYLwdsvh1XfF0tUPG4VIV59LLaAmF'+
			'eZTJSEZSe64qnlFwfzk+KJ8m7UntmaoY8WFcXHNl0G5tFaE/cYCZKuaxJF6xxltJdaG8V69l17wlzGfb/mRqD5fjhd7Py8z2SRrx6BMxVNyDiR6U9qX2H72dlRPimf174rIm5z+C98Rg+YCNu64VoYbvMISX8X4zsfxl5As8+z8ROy5eRn7E3VKymc8EljElngT7xavVf42jydZVPC6XATenKGfxpBjJp/GGciGgFSpJ93SydUDuTknrEsHToov7xDvmtI0tERwTayN1ccncUCJoldSdwGOiiyfFxdnLbm3GRNI1qTF9N5BCYRlqJISwkLusng4hTIXuy1BTSTbDQtK9IYW7NzGYvmU3qllxbVzEn6nvVjEnGxXPvnGNwt0feNsGFO7yz2AI4dUQwlIHZYBmLCXZwU7tdeKx9TCWPHGvRnE4n6JnxeHvk2e7Lg7/C5'+
			'e6U+xMrYOUAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hiidemenu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 0px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hiidemenu0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hiidemenu0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hiidemenu0'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hiidemenu0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hiidemenu0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hiidemenu0.style[domTransition]='opacity 0s';
				if (me._hiidemenu0.ggCurrentLogicStateAlpha == 0) {
					me._hiidemenu0.style.visibility=me._hiidemenu0.ggVisible?'inherit':'hidden';
					me._hiidemenu0.style.opacity=1;
				}
				else {
					me._hiidemenu0.style.visibility=me._hiidemenu0.ggVisible?'inherit':'hidden';
					me._hiidemenu0.style.opacity=0.7;
				}
			}
		}
		me._hiidemenu0.onclick=function (e) {
			var flag=me._minipano.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._minipano.style[domTransition]='none';
			} else {
				me._minipano.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._minipano.style.opacity='1';
				me._minipano.style.visibility=me._minipano.ggVisible?'inherit':'hidden';
			} else {
				me._minipano.style.opacity='0';
				me._minipano.style.visibility='hidden';
			}
			me._minipano.ggOpacitiyActive=!flag;
		}
		me._hiidemenu0.onmouseover=function (e) {
			me.elementMouseOver['hiidemenu0']=true;
			me._hiidemenu0.logicBlock_alpha();
		}
		me._hiidemenu0.onmouseout=function (e) {
			me.elementMouseOver['hiidemenu0']=false;
			me._hiidemenu0.logicBlock_alpha();
		}
		me._hiidemenu0.ontouchend=function (e) {
			me.elementMouseOver['hiidemenu0']=false;
			me._hiidemenu0.logicBlock_alpha();
		}
		me._hiidemenu0.ggUpdatePosition=function (useTransition) {
		}
		me._controller3.appendChild(me._hiidemenu0);
		me.divSkin.appendChild(me._controller3);
		el=me._controllermobile=document.createElement('div');
		el.ggId="controllermobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 38px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 134px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controllermobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controllermobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controllermobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controllermobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controllermobile.style[domTransition]='';
				if (me._controllermobile.ggCurrentLogicStateVisible == 0) {
					me._controllermobile.style.visibility=(Number(me._controllermobile.style.opacity)>0||!me._controllermobile.style.opacity)?'inherit':'hidden';
					me._controllermobile.ggVisible=true;
				}
				else {
					me._controllermobile.style.visibility="hidden";
					me._controllermobile.ggVisible=false;
				}
			}
		}
		me._controllermobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._hiidemenu=document.createElement('div');
		els=me._hiidemenu__img=document.createElement('img');
		els.className='ggskin ggskin_hiidemenu';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAADz0lEQVRYhb3YTWhcVRQH8N9MUhHMSKhCoZTGRTHJRtKFtWpBig1xZywIGqloUaGLatAqfnWl6EKRqrixixa3gh+7ggERQm3cJLppUlzYUroSFdtiNZleF/e+zMs0M29mXvQPjzvv3XvO+c+595577qmEEPSAMezDfdiBbbgl9V3FRfyM05jBQtcWQgidPrUQwishhMXQPRaTbK1Te5UOPLYJz+N1bE7ffk2emMUiLuBy6qthO0awJ3n29tT3G97BR1gu47HhEMJ87p/PhRCeCCFsCSFs7vDZkmTmcnrmk+6ePDaJz5IHLuA1nCpybwEewruiR6/gAL5ab2ArYk/hOPrxNV7QmKqyqOFDPIwVPIcTnRB7BJ+jDx+Ia6KnrdsGFXHNvog6HsWX7YiN4g'+
			'cM4Bje2mBCzTiKaXFad+HsesQ2JVJj4rw/Y+M91YwKPsV+Mdbtku3W3E54Ke2Y8yGEoaadVYS9adyODsY279qhEMIvqe9IxqeamNfEOSfuvm4X+kpqgzgt3eByk+0aVokdEoPnnHIhYTmnsxucwpnE4VCe2MHUflyCVEasV2S2DxKJ7cSweMx8U46XegnZmcRhGDureDDXsdJKqkPcVEJ2RcMx+6rYnV5mS1GKqIthp1dkHHZXRdcRs4SyqOtt8WfIONzZj63p5UIbgW1t+iq4ln6v4I4244oCdsZha794/NA+/vxVoDBvvI7rIskgTm2fmBBcay26hsNAf+5ju39zF/5OBvs0piszdj71V6z1bqazkmRr+KmA3KriK2JgGxAzzPXwbYGevcngzWKQrrQZe1ubvtXZq+JSetleYLwdsvh1XfF0tUPG4VIV59LLaAmF'+
			'eZTJSEZSe64qnlFwfzk+KJ8m7UntmaoY8WFcXHNl0G5tFaE/cYCZKuaxJF6xxltJdaG8V69l17wlzGfb/mRqD5fjhd7Py8z2SRrx6BMxVNyDiR6U9qX2H72dlRPimf174rIm5z+C98Rg+YCNu64VoYbvMISX8X4zsfxl5As8+z8ROy5eRn7E3VKymc8EljElngT7xavVf42jydZVPC6XATenKGfxpBjJp/GGciGgFSpJ93SydUDuTknrEsHToov7xDvmtI0tERwTayN1ccncUCJoldSdwGOiiyfFxdnLbm3GRNI1qTF9N5BCYRlqJISwkLusng4hTIXuy1BTSTbDQtK9IYW7NzGYvmU3qllxbVzEn6nvVjEnGxXPvnGNwt0feNsGFO7yz2AI4dUQwlIHZYBmLCXZwU7tdeKx9TCWPHGvRnE4n6JnxeHvk2e7Lg7/C5'+
			'e6U+xMrYOUAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hiidemenu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 0px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hiidemenu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hiidemenu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hiidemenu'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hiidemenu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hiidemenu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hiidemenu.style[domTransition]='opacity 0s';
				if (me._hiidemenu.ggCurrentLogicStateAlpha == 0) {
					me._hiidemenu.style.visibility=me._hiidemenu.ggVisible?'inherit':'hidden';
					me._hiidemenu.style.opacity=1;
				}
				else {
					me._hiidemenu.style.visibility=me._hiidemenu.ggVisible?'inherit':'hidden';
					me._hiidemenu.style.opacity=0.7;
				}
			}
		}
		me._hiidemenu.onclick=function (e) {
			var flag=me._minipanover.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._minipanover.style[domTransition]='none';
			} else {
				me._minipanover.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._minipanover.style.opacity='1';
				me._minipanover.style.visibility=me._minipanover.ggVisible?'inherit':'hidden';
			} else {
				me._minipanover.style.opacity='0';
				me._minipanover.style.visibility='hidden';
			}
			me._minipanover.ggOpacitiyActive=!flag;
			var flag=me._minipanohor.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._minipanohor.style[domTransition]='none';
			} else {
				me._minipanohor.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._minipanohor.style.opacity='1';
				me._minipanohor.style.visibility=me._minipanohor.ggVisible?'inherit':'hidden';
			} else {
				me._minipanohor.style.opacity='0';
				me._minipanohor.style.visibility='hidden';
			}
			me._minipanohor.ggOpacitiyActive=!flag;
		}
		me._hiidemenu.onmouseover=function (e) {
			me.elementMouseOver['hiidemenu']=true;
			me._hiidemenu.logicBlock_alpha();
		}
		me._hiidemenu.onmouseout=function (e) {
			me.elementMouseOver['hiidemenu']=false;
			me._hiidemenu.logicBlock_alpha();
		}
		me._hiidemenu.ontouchend=function (e) {
			me.elementMouseOver['hiidemenu']=false;
			me._hiidemenu.logicBlock_alpha();
		}
		me._hiidemenu.ggUpdatePosition=function (useTransition) {
		}
		me._controllermobile.appendChild(me._hiidemenu);
		el=me._image_2222222=document.createElement('div');
		els=me._image_2222222__img=document.createElement('img');
		els.className='ggskin ggskin_image_2222222';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAFdklEQVRYhc2YS2xVVRSGv3v7pNyWtij1FdAEkTJASJSAmvgAB8rEFyEtGEGjGI1K1BBjTByokJigCYkDNTE+Bg4Mj5kYMXHQFJABVBItvmJFGEhBoEUCRX4H+z+c3dNzy71A1J3snHP2Wnut/6y1115r74IkLqDNARYBtwDTgWuAiaadAH4HfgJ6gW3Anqo1SKq0N0taI6lf1bd+z22uVF+hAovVAc8CLwPtHhu0JXqAfuA3YMi0ZmAqMBO4zZa9zLQjwFpgAzByMRa7QdLu6M93SlomqUNSm6RWSS22RMm92WOt5unwnJ2RnN2WXVb3eKDuk3TcggYkdUdgSpIaJdVJqpFUzPQa0yYYaKukdssYsMwh66gK2ApJIxawRdK0CFC9lRcqWCsF89Z7bq'+
			'tlbbHsEUkrKwV2v6Qznrjef9psJZWAGa83Sppkmeut44x1jgus0yaWpLcVXHcpAMUWrFNYg23WIevsjHnjqKwDviHsUVuAx4A/TasHVgGzgNNR7BSAY8BbjrikLQCWWGYc9rXA58AXQKO/3wceIOx1885Fa4TyBaMf8Dpoiax1h8ZvqyM5tZL2jMN71DKbFNw6TdKvpr2ojCubJR02sVthkcbueyJHwaCkA5J+kbQw4i1KesPy9ks6lpl3KuJrsq5u0w4byzlga0zYobAwSxlgK3OA7ZI0T9J1GrsGGyTNlLRY0sHMvJMRX7KdtEvabvqaGFiSZpb5DxozivKAnZb0nv88b6FPkfSVpLPmT54xsKLBxVbrT4DN9cAhC8vLZ49GgLZqtHs+9ryYf4akryOePvcsMBT2uBbLOGSeuUVgoSNmmyPibE7misc+Ap4Ehv39'+
			'MDA7w78KuN3vPeY5EEVm3P52HwG+9NiiIjA/EiAzZdveaHwQ+BRYTdg63gR2ZPg/APrcu4Bvgf2mDWR4z5L+eI+f85G01+ZbqBC+9TmuLEq6U9KiDH2O10jeGrvWPfnukPSgpOk5vA1eZ3cZy96CpMOEcmYG8AdwktGb6L/R6oEJwOXAj8CRIlAycZjgygsqaS9RS9ZtqRgNipBi/hetSITSz/8CXMH9nPeKwEF/TI0YsuBKhHJ4A9AWjb0G3FhG2WJgefR9E/AZ0J0DKvHcVD8PImmjI+FphVKkSWN383ujzXKpx5J6qk9jy+R7lKai5R7b5O/BnIifaN1PmWdjkXQPutXoa6I/SNpV0XsD8CrwvL9nZegFwuZ6pb/fBZ4j3VibM7ITfQXC4QVgR15KmuR9pVyu7FOa905I6srZl1oVUlXSTitNN9lc2Wj+USkpL4'+
			'm32bTnS+JDCom3XLValPSJ0jI9aTGwBoVKpk2ZJJ647EM/n7FJa+2yJAjyIrWPEABLgZYM7XpgJfADocLNa0XSKrZg3SkWjS0Uu/wHcZWxIsdicXskY6mt5+FPrHWFQi3W5fEjid7EYkPAOr+vswVqbZE64Lsyf520M5nvclaCEGy1hCCo8zPRvdZYyh5GNgGPE7LBiPtsoNMuSCbVAD8Du4C/IuVTCFHeRlqV1BAON7uAUwQ3jgDvEA4jfcDN5BxG0NjjW7vdWrLpL+YYV1AIqg6FqqNd6fFtWJnjW56A7IF3ssFNsv+rBVjwnDZJVytsC5NV5YE33h4ScJsVjljtSi9RmhTqspoyIAum1Zs3OeC2W9bmCFTFVwRJf8gmlsK5r8uCE/cmIEt2UZP7RI/FNz7JvC6lZ8hhSUvK6T+fG2Zq9OG1V2Ej7MiAzOsJvcNz'+
			'eiM5eyy7rO5qLu5eAVo9Nkg4OPQA3xOuNo+b1kK4+uwk5L67SS/ujgKvcwku7rL57yVJ+1R92+e5rZXqq8RieW2OLbGA9HI4LtGTy+HttmzVl8P/AOmxYXCzefbAAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2222222";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 44px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2222222.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2222222.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_2222222'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_2222222.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_2222222.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_2222222.style[domTransition]='opacity 0s';
				if (me._image_2222222.ggCurrentLogicStateAlpha == 0) {
					me._image_2222222.style.visibility=me._image_2222222.ggVisible?'inherit':'hidden';
					me._image_2222222.style.opacity=1;
				}
				else {
					me._image_2222222.style.visibility=me._image_2222222.ggVisible?'inherit':'hidden';
					me._image_2222222.style.opacity=0.7;
				}
			}
		}
		me._image_2222222.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._image_2222222.onmouseover=function (e) {
			me.elementMouseOver['image_2222222']=true;
			me._image_2222222.logicBlock_alpha();
		}
		me._image_2222222.onmouseout=function (e) {
			me.elementMouseOver['image_2222222']=false;
			me._image_2222222.logicBlock_alpha();
		}
		me._image_2222222.ontouchend=function (e) {
			me.elementMouseOver['image_2222222']=false;
			me._image_2222222.logicBlock_alpha();
		}
		me._image_2222222.ggUpdatePosition=function (useTransition) {
		}
		me._controllermobile.appendChild(me._image_2222222);
		el=me._enter_vr=document.createElement('div');
		els=me._enter_vr__img=document.createElement('img');
		els.className='ggskin ggskin_enter_vr';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAE/klEQVRYhbWYzW+UVRTGf+98lBY6dDqiRZSPRAUaXfChBsXEhXTjRkx0UdiIiVES40LREGPixhhdEBNXbjT+A6SsjIksjGkoNWpxYWiJEoqEjXwFakht6ePiPpf3Mp0pM7Q9ycm8c++55zz3vOc995ybSeIeaBuwB3gWeBR4GFjluX+BC8CfwAngOHCqbQuSWuWKpA8kjat9GvfaSqv2shY8VgbeAT4Eah67ZE8MA+PAeeCG5yrABmAr8Jw9u8ZzV4BPgS+BmcV4bIuksWTno5L2S+qT1CupKmm1PdFtrnisapk+rxlN9IxZd1PbC4HaK+m6FU1K2peA6ZbUKaksqSipUMdFz3UZaFVSzTomrfOGbbQF7DVJM1ZwTNLGBFCHjWctxEpm2Q6vrVrXMe'+
			'uekXSgVWAvS5r1wiPeacVGWgGzEHdK6rHOI7Yxa5sLAuu3iyXpC4VXtxSAUg+WFWKw1zZkm/3NgJWVB/qQd5VpaYFFcB0GV5N01DbHjGEesPcsMKkQB6uXAVQKbqXCa90o6ZxtH6oHVpF02ZP7FIJ0OQClXDC4qm3KGCqSKDidHXTyHAW+B2bvemQsnuYAAbds86QxHEwTbDxm9nsHncvsrdRrXXVeG5fCkbQd+I1wzDwO3CQ/XoaAJ727paQC8CuwF+gAOs1/EI6vHSXgBQsfJ5xfKYjngd4lBhUpViO3zDPAD8AgsKcA7LLAMPk7j3RzmUCluufInTHs310FYIv/jBtY6rGsgcL/gIvA9RaM37DsdIO5qDvalDEAbC4B6/znfAuGzgPfACPAY8DrwI4msr8DXwMTwFPAG8DGJrIyRwzrkDTtr+FBhaRaTr6ai8rp'+
			'qkKxl35VL0o6q/k0KemlOtl3ledKWXec61BItms9N12oQ93o1UW6BvxcNzZK+JLq6TQhL9XLXllA/x1UAKb83O3fZuB6gJ11YzuBfj9Pkwd0fxPZGo0pM0cMUyVCcNYI5fClRKi+5q4CbxNK7RFgM/Am8AghaD8HrgLvA7uBT4D1BO89DbxF49STwe0TaIN/L5aAM8AT3uUYUGwCLAM2AR8D/xBq+yqhK/oK+NZyKwid03bgM8KXuQboagAqBZYR+gSAMwXyWNjtyWKyg0adSifBE1X/P8ud8TQK/OLnqmUbgYq6o72M0LwAnCwQMj7AAFCyUNFjzXaZKh8D/krG/ib0kQt3QWGD0VbRtgc8d7xkxROERDsAfGehaeAnQtA2Oiu7CB/Oj8DlZHyO0OieJuTIm8z3fIGQ58q2lZG3eRPAWMwjh50/TipUlT2SVmh5a7'+
			'KC7cQOasQYDqtJoTioUI+33DXfI69wQq3ZpiRdiXZTwUOePKdQ7vYqtFzlFoy0yyVJaySt111Ka3RnM3LUO4ngSksIqijpfoNaq7wZOaUmzQia376l4BYbc5mkVQpXBpusO7ZvU1qgfYtc3/DeZ3A9Cu+/XYCZ1/RKekjSA9bZVsMb+UACbkghDmrKL1FWKlQExSYgM891WDY2uDXrGkpAtXxFEPkVu1gKwTloxfH1RpDdfkUrzas8lt74xHWDygN9StKrzezf7TVsVQjKSCcUupm+OpCNOM73ec2JRM8p625qu52Lu4/Iz8dLhMZh2Bn+AnmpvZpw9dlPOPsGyC/urhGqjkVf3KVcVcjKE2qfJry22qq9VjzWiLbZE8+QXw7fLvLIL4dH7Nm2L4f/BwZ/lt4m6tewAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="enter_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 88px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._enter_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._enter_vr.style[domTransition]='';
				if (me._enter_vr.ggCurrentLogicStateVisible == 0) {
					me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
					me._enter_vr.ggVisible=true;
				}
				else {
					me._enter_vr.style.visibility="hidden";
					me._enter_vr.ggVisible=false;
				}
			}
		}
		me._enter_vr.onclick=function (e) {
			player.enterVR();
		}
		me._enter_vr.ggUpdatePosition=function (useTransition) {
		}
		me._controllermobile.appendChild(me._enter_vr);
		me.divSkin.appendChild(me._controllermobile);
		el=me._minipano=document.createElement('div');
		els=me._minipano__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 86px;';
		hs+='left : 50%;';
		hs+='margin-left : -99.5px;';
		hs+='margin-top : -43px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 199px;';
		hs+="";
		els.setAttribute('style',hs);
		me._minipano.ggScrollByX = function(diffX) {
			if(!me._minipano.ggHorScrollVisible || diffX == 0) return;
			me._minipano.ggScrollPosX = (me._minipano__horScrollFg.offsetLeft + diffX);
			me._minipano.ggScrollPosX = Math.max(me._minipano.ggScrollPosX, 0);
			me._minipano.ggScrollPosX = Math.min(me._minipano.ggScrollPosX, me._minipano__horScrollBg.offsetWidth - me._minipano__horScrollFg.offsetWidth);
			me._minipano__horScrollFg.style.left = me._minipano.ggScrollPosX + 'px';
			me._minipano__content.style.left = -(Math.round(me._minipano.ggScrollPosX / me._minipano.ggHPercentVisible)) + me._minipano.ggContentLeftOffset + 'px';
			me._minipano.ggScrollPosXPercent = (me._minipano__horScrollFg.offsetLeft / me._minipano__horScrollBg.offsetWidth);
		}
		me._minipano.ggScrollByXSmooth = function(diffX) {
			if(!me._minipano.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._minipano.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._minipano.ggScrollPosX >= me._minipano__horScrollBg.offsetWidth - me._minipano__horScrollFg.offsetWidth)) {
					me._minipano.ggScrollPosX = Math.min(me._minipano.ggScrollPosX, me._minipano__horScrollBg.offsetWidth - me._minipano__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._minipano.ggScrollPosX <= 0)) {
					me._minipano.ggScrollPosX = Math.max(me._minipano.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._minipano__horScrollFg.style.left = me._minipano.ggScrollPosX + 'px';
			me._minipano__content.style.left = -(Math.round(me._minipano.ggScrollPosX / me._minipano.ggHPercentVisible)) + me._minipano.ggContentLeftOffset + 'px';
			me._minipano.ggScrollPosXPercent = (me._minipano__horScrollFg.offsetLeft / me._minipano__horScrollBg.offsetWidth);
			}, 10);
		}
		me._minipano.ggScrollByY = function(diffY) {
			if(!me._minipano.ggVertScrollVisible || diffY == 0) return;
			me._minipano.ggScrollPosY = (me._minipano__vertScrollFg.offsetTop + diffY);
			me._minipano.ggScrollPosY = Math.max(me._minipano.ggScrollPosY, 0);
			me._minipano.ggScrollPosY = Math.min(me._minipano.ggScrollPosY, me._minipano__vertScrollBg.offsetHeight - me._minipano__vertScrollFg.offsetHeight);
			me._minipano__vertScrollFg.style.top = me._minipano.ggScrollPosY + 'px';
			me._minipano__content.style.top = -(Math.round(me._minipano.ggScrollPosY / me._minipano.ggVPercentVisible)) + me._minipano.ggContentTopOffset + 'px';
			me._minipano.ggScrollPosYPercent = (me._minipano__vertScrollFg.offsetTop / me._minipano__vertScrollBg.offsetHeight);
		}
		me._minipano.ggScrollByYSmooth = function(diffY) {
			if(!me._minipano.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._minipano.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._minipano.ggScrollPosY >= me._minipano__vertScrollBg.offsetHeight - me._minipano__vertScrollFg.offsetHeight)) {
					me._minipano.ggScrollPosY = Math.min(me._minipano.ggScrollPosY, me._minipano__vertScrollBg.offsetHeight - me._minipano__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._minipano.ggScrollPosY <= 0)) {
					me._minipano.ggScrollPosY = Math.max(me._minipano.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._minipano__vertScrollFg.style.top = me._minipano.ggScrollPosY + 'px';
			me._minipano__content.style.top = -(Math.round(me._minipano.ggScrollPosY / me._minipano.ggVPercentVisible)) + me._minipano.ggContentTopOffset + 'px';
			me._minipano.ggScrollPosYPercent = (me._minipano__vertScrollFg.offsetTop / me._minipano__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._minipano.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._minipano.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._minipano.ggHPercentVisible);
					me._minipano.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._minipano.offsetWidth - (me._minipano.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._minipano.offsetWidth - (me._minipano.ggVertScrollVisible ? 15 : 0))) * me._minipano.ggHPercentVisible);
					me._minipano.ggScrollByXSmooth(diffX);
				}
			}
			if (me._minipano.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._minipano.ggVPercentVisible);
					me._minipano.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._minipano.offsetHeight - (me._minipano.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._minipano.offsetHeight - (me._minipano.ggHorScrollVisible ? 15 : 0))) * me._minipano.ggVPercentVisible);
					me._minipano.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._minipano.ggDragLastX = t[0].clientX;
			me._minipano.ggDragLastY = t[0].clientY;
			me._minipano__content.ontouchend = function() {
				me._minipano__content.ontouchend = null;
				me._minipano__content.ontouchmove = null;
			}
			me._minipano__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._minipano.ggDragLastX;
				var diffY = t[0].clientY - me._minipano.ggDragLastY;
				me._minipano.ggDragLastX = t[0].clientX;
				me._minipano.ggDragLastY = t[0].clientY;
				me._minipano.ggScrollByX(-diffX);
				me._minipano.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me._minipano__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 900px; height: 15px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._minipano__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 900px; height: 15px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._minipano.ggScrollPosX = 0;
		me._minipano.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._minipano.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._minipano.ggDragLastX;
				me._minipano.ggDragLastX = e.clientX;
				me._minipano.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._minipano.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._minipano.ggDragLastX;
				me._minipano.ggDragLastX = t[0].clientX;
				me._minipano.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._minipano.ggScrollWidth;
			if (e.offsetX < me._minipano.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._minipano.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._minipano__horScrollBg.getBoundingClientRect();
			var diffX = me._minipano.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._minipano.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._minipano.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._minipano.ggScrollByXSmooth(20 * wheelDelta);
		});
		elCornerBg = me._minipano__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="minipano";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : 52px;';
		hs+='cursor : pointer;';
		hs+='height : 106px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._minipano.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._minipano.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._minipano.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._minipano.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._minipano.style[domTransition]='';
				if (me._minipano.ggCurrentLogicStateVisible == 0) {
					me._minipano.style.visibility="hidden";
					me._minipano.ggVisible=false;
				}
				else {
					me._minipano.style.visibility=(Number(me._minipano.style.opacity)>0||!me._minipano.style.opacity)?'inherit':'hidden';
					me._minipano.ggVisible=true;
				}
			}
		}
		me._minipano.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 15;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (15/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.offsetHeight;
				if (this.ggHorScrollVisible) containerHeight -= 15;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (15/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > offsetWidthWithScale) {
					me._minipano__horScrollBg.style.visibility = 'inherit';
					me._minipano__horScrollFg.style.visibility = 'inherit';
					me._minipano.ggHorScrollVisible = true;
				} else {
					me._minipano__horScrollBg.style.visibility = 'hidden';
					me._minipano__horScrollFg.style.visibility = 'hidden';
					me._minipano.ggHorScrollVisible = false;
				}
				if(me._minipano.ggHorScrollVisible) {
					me._minipano.ggAvailableHeight = me._minipano.offsetHeight - 15;
					if (me._minipano.ggVertScrollVisible) {
						me._minipano.ggAvailableWidth = me._minipano.offsetWidth - 15;
						me._minipano.ggAvailableWidthWithScale = me._minipano.getBoundingClientRect().width - me._minipano__horScrollBg.getBoundingClientRect().height;
					} else {
						me._minipano.ggAvailableWidth = me._minipano.offsetWidth;
						me._minipano.ggAvailableWidthWithScale = me._minipano.getBoundingClientRect().width;
					}
					me._minipano__horScrollBg.style.width = me._minipano.ggAvailableWidth + 'px';
					me._minipano.ggHPercentVisible = me._minipano.ggAvailableWidthWithScale / contentWidth;
					if (me._minipano.ggHPercentVisible > 1.0) me._minipano.ggHPercentVisible = 1.0;
					me._minipano.ggScrollWidth = Math.round(me._minipano__horScrollBg.offsetWidth * me._minipano.ggHPercentVisible);
					me._minipano__horScrollFg.style.width = me._minipano.ggScrollWidth + 'px';
					me._minipano.ggScrollPosX = me._minipano.ggScrollPosXPercent * me._minipano.ggAvailableWidth;
					me._minipano.ggScrollPosX = Math.min(me._minipano.ggScrollPosX, me._minipano__horScrollBg.offsetWidth - me._minipano__horScrollFg.offsetWidth);
					me._minipano__horScrollFg.style.left = me._minipano.ggScrollPosX + 'px';
					me._minipano__content.style.left = -(Math.round(me._minipano.ggScrollPosX / me._minipano.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				} else {
					me._minipano.ggAvailableHeight = me._minipano.offsetHeight;
					me._minipano.ggScrollPosX = 0;
					me._minipano.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._minipano.ggHorScrollVisible || vertScrollWasVisible != me._minipano.ggVertScrollVisible) {
					me.updateSize(me._minipano);
					me._minipano.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner1=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 195;
		el.ggHeight = 80;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner1.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner1.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner1.ggInstances.length; i++) {
					if (me._thumbnail_cloner1.ggInstances[i]._thumbnail_active1 && me._thumbnail_cloner1.ggInstances[i]._thumbnail_active1.logicBlock_bordercolor) {
						me._thumbnail_cloner1.ggInstances[i]._thumbnail_active1.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner1.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner1.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner1.ggInstances.length; i++) {
					if (me._thumbnail_cloner1.ggInstances[i]._node_text1 && me._thumbnail_cloner1.ggInstances[i]._node_text1.logicBlock_visible) {
						me._thumbnail_cloner1.ggInstances[i]._node_text1.logicBlock_visible();
					}
					if (me._thumbnail_cloner1.ggInstances[i]._node_text21 && me._thumbnail_cloner1.ggInstances[i]._node_text21.logicBlock_visible) {
						me._thumbnail_cloner1.ggInstances[i]._node_text21.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner1.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner1.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner1.ggInstances.length; i++) {
					if (me._thumbnail_cloner1.ggInstances[i]._checker1 && me._thumbnail_cloner1.ggInstances[i]._checker1.logicBlock_visible) {
						me._thumbnail_cloner1.ggInstances[i]._checker1.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner1.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner1.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner1.ggInstances.length; i++) {
					if (me._thumbnail_cloner1.ggInstances[i]._checkervisited1 && me._thumbnail_cloner1.ggInstances[i]._checkervisited1.logicBlock_visible) {
						me._thumbnail_cloner1.ggInstances[i]._checkervisited1.logicBlock_visible();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner1.ggUpdating == true) return;
			me._thumbnail_cloner1.ggUpdating = true;
			var el=me._thumbnail_cloner1;
			var curNumRows = 0;
			curNumRows = el.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner1.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner1.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner1.ggWidth) + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner1_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
				}
			}
			me._thumbnail_cloner1.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner1.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner1.callChildLogicBlocks_active();
			me._thumbnail_cloner1.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner1.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="Thumbnail Cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : 5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 195px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner1.childNodes.length; i++) {
				var child=me._thumbnail_cloner1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner1.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner1.ggUpdate();
		}
		me._thumbnail_cloner1.ggNodeChange=function () {
			me._thumbnail_cloner1.ggUpdateConditionNodeChange();
		}
		me._minipano__content.appendChild(me._thumbnail_cloner1);
		me.divSkin.appendChild(me._minipano);
		el=me._minipanover=document.createElement('div');
		els=me._minipanover__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 86px;';
		hs+='left : 50%;';
		hs+='margin-left : -97px;';
		hs+='margin-top : -43px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 194px;';
		hs+="";
		els.setAttribute('style',hs);
		me._minipanover.ggScrollByX = function(diffX) {
			if(!me._minipanover.ggHorScrollVisible || diffX == 0) return;
			me._minipanover.ggScrollPosX = (me._minipanover__horScrollFg.offsetLeft + diffX);
			me._minipanover.ggScrollPosX = Math.max(me._minipanover.ggScrollPosX, 0);
			me._minipanover.ggScrollPosX = Math.min(me._minipanover.ggScrollPosX, me._minipanover__horScrollBg.offsetWidth - me._minipanover__horScrollFg.offsetWidth);
			me._minipanover__horScrollFg.style.left = me._minipanover.ggScrollPosX + 'px';
			me._minipanover__content.style.left = -(Math.round(me._minipanover.ggScrollPosX / me._minipanover.ggHPercentVisible)) + me._minipanover.ggContentLeftOffset + 'px';
			me._minipanover.ggScrollPosXPercent = (me._minipanover__horScrollFg.offsetLeft / me._minipanover__horScrollBg.offsetWidth);
		}
		me._minipanover.ggScrollByXSmooth = function(diffX) {
			if(!me._minipanover.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._minipanover.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._minipanover.ggScrollPosX >= me._minipanover__horScrollBg.offsetWidth - me._minipanover__horScrollFg.offsetWidth)) {
					me._minipanover.ggScrollPosX = Math.min(me._minipanover.ggScrollPosX, me._minipanover__horScrollBg.offsetWidth - me._minipanover__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._minipanover.ggScrollPosX <= 0)) {
					me._minipanover.ggScrollPosX = Math.max(me._minipanover.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._minipanover__horScrollFg.style.left = me._minipanover.ggScrollPosX + 'px';
			me._minipanover__content.style.left = -(Math.round(me._minipanover.ggScrollPosX / me._minipanover.ggHPercentVisible)) + me._minipanover.ggContentLeftOffset + 'px';
			me._minipanover.ggScrollPosXPercent = (me._minipanover__horScrollFg.offsetLeft / me._minipanover__horScrollBg.offsetWidth);
			}, 10);
		}
		me._minipanover.ggScrollByY = function(diffY) {
			if(!me._minipanover.ggVertScrollVisible || diffY == 0) return;
			me._minipanover.ggScrollPosY = (me._minipanover__vertScrollFg.offsetTop + diffY);
			me._minipanover.ggScrollPosY = Math.max(me._minipanover.ggScrollPosY, 0);
			me._minipanover.ggScrollPosY = Math.min(me._minipanover.ggScrollPosY, me._minipanover__vertScrollBg.offsetHeight - me._minipanover__vertScrollFg.offsetHeight);
			me._minipanover__vertScrollFg.style.top = me._minipanover.ggScrollPosY + 'px';
			me._minipanover__content.style.top = -(Math.round(me._minipanover.ggScrollPosY / me._minipanover.ggVPercentVisible)) + me._minipanover.ggContentTopOffset + 'px';
			me._minipanover.ggScrollPosYPercent = (me._minipanover__vertScrollFg.offsetTop / me._minipanover__vertScrollBg.offsetHeight);
		}
		me._minipanover.ggScrollByYSmooth = function(diffY) {
			if(!me._minipanover.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._minipanover.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._minipanover.ggScrollPosY >= me._minipanover__vertScrollBg.offsetHeight - me._minipanover__vertScrollFg.offsetHeight)) {
					me._minipanover.ggScrollPosY = Math.min(me._minipanover.ggScrollPosY, me._minipanover__vertScrollBg.offsetHeight - me._minipanover__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._minipanover.ggScrollPosY <= 0)) {
					me._minipanover.ggScrollPosY = Math.max(me._minipanover.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._minipanover__vertScrollFg.style.top = me._minipanover.ggScrollPosY + 'px';
			me._minipanover__content.style.top = -(Math.round(me._minipanover.ggScrollPosY / me._minipanover.ggVPercentVisible)) + me._minipanover.ggContentTopOffset + 'px';
			me._minipanover.ggScrollPosYPercent = (me._minipanover__vertScrollFg.offsetTop / me._minipanover__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._minipanover.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._minipanover.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._minipanover.ggHPercentVisible);
					me._minipanover.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._minipanover.offsetWidth - (me._minipanover.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._minipanover.offsetWidth - (me._minipanover.ggVertScrollVisible ? 15 : 0))) * me._minipanover.ggHPercentVisible);
					me._minipanover.ggScrollByXSmooth(diffX);
				}
			}
			if (me._minipanover.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._minipanover.ggVPercentVisible);
					me._minipanover.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._minipanover.offsetHeight - (me._minipanover.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._minipanover.offsetHeight - (me._minipanover.ggHorScrollVisible ? 15 : 0))) * me._minipanover.ggVPercentVisible);
					me._minipanover.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._minipanover.ggDragLastX = t[0].clientX;
			me._minipanover.ggDragLastY = t[0].clientY;
			me._minipanover__content.ontouchend = function() {
				me._minipanover__content.ontouchend = null;
				me._minipanover__content.ontouchmove = null;
			}
			me._minipanover__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._minipanover.ggDragLastX;
				var diffY = t[0].clientY - me._minipanover.ggDragLastY;
				me._minipanover.ggDragLastX = t[0].clientX;
				me._minipanover.ggDragLastY = t[0].clientY;
				me._minipanover.ggScrollByX(-diffX);
				me._minipanover.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me._minipanover__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 900px; height: 15px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._minipanover__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 900px; height: 15px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._minipanover.ggScrollPosX = 0;
		me._minipanover.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._minipanover.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._minipanover.ggDragLastX;
				me._minipanover.ggDragLastX = e.clientX;
				me._minipanover.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._minipanover.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._minipanover.ggDragLastX;
				me._minipanover.ggDragLastX = t[0].clientX;
				me._minipanover.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._minipanover.ggScrollWidth;
			if (e.offsetX < me._minipanover.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._minipanover.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._minipanover__horScrollBg.getBoundingClientRect();
			var diffX = me._minipanover.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._minipanover.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._minipanover.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._minipanover.ggScrollByXSmooth(20 * wheelDelta);
		});
		elCornerBg = me._minipanover__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="minipanover";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : 52px;';
		hs+='cursor : pointer;';
		hs+='height : 106px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._minipanover.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._minipanover.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width / player.getViewerSize().height < 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._minipanover.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._minipanover.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._minipanover.style[domTransition]='';
				if (me._minipanover.ggCurrentLogicStateVisible == 0) {
					me._minipanover.style.visibility=(Number(me._minipanover.style.opacity)>0||!me._minipanover.style.opacity)?'inherit':'hidden';
					me._minipanover.ggVisible=true;
				}
				else {
					me._minipanover.style.visibility="hidden";
					me._minipanover.ggVisible=false;
				}
			}
		}
		me._minipanover.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 15;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (15/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.offsetHeight;
				if (this.ggHorScrollVisible) containerHeight -= 15;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (15/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > offsetWidthWithScale) {
					me._minipanover__horScrollBg.style.visibility = 'inherit';
					me._minipanover__horScrollFg.style.visibility = 'inherit';
					me._minipanover.ggHorScrollVisible = true;
				} else {
					me._minipanover__horScrollBg.style.visibility = 'hidden';
					me._minipanover__horScrollFg.style.visibility = 'hidden';
					me._minipanover.ggHorScrollVisible = false;
				}
				if(me._minipanover.ggHorScrollVisible) {
					me._minipanover.ggAvailableHeight = me._minipanover.offsetHeight - 15;
					if (me._minipanover.ggVertScrollVisible) {
						me._minipanover.ggAvailableWidth = me._minipanover.offsetWidth - 15;
						me._minipanover.ggAvailableWidthWithScale = me._minipanover.getBoundingClientRect().width - me._minipanover__horScrollBg.getBoundingClientRect().height;
					} else {
						me._minipanover.ggAvailableWidth = me._minipanover.offsetWidth;
						me._minipanover.ggAvailableWidthWithScale = me._minipanover.getBoundingClientRect().width;
					}
					me._minipanover__horScrollBg.style.width = me._minipanover.ggAvailableWidth + 'px';
					me._minipanover.ggHPercentVisible = me._minipanover.ggAvailableWidthWithScale / contentWidth;
					if (me._minipanover.ggHPercentVisible > 1.0) me._minipanover.ggHPercentVisible = 1.0;
					me._minipanover.ggScrollWidth = Math.round(me._minipanover__horScrollBg.offsetWidth * me._minipanover.ggHPercentVisible);
					me._minipanover__horScrollFg.style.width = me._minipanover.ggScrollWidth + 'px';
					me._minipanover.ggScrollPosX = me._minipanover.ggScrollPosXPercent * me._minipanover.ggAvailableWidth;
					me._minipanover.ggScrollPosX = Math.min(me._minipanover.ggScrollPosX, me._minipanover__horScrollBg.offsetWidth - me._minipanover__horScrollFg.offsetWidth);
					me._minipanover__horScrollFg.style.left = me._minipanover.ggScrollPosX + 'px';
					me._minipanover__content.style.left = -(Math.round(me._minipanover.ggScrollPosX / me._minipanover.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				} else {
					me._minipanover.ggAvailableHeight = me._minipanover.offsetHeight;
					me._minipanover.ggScrollPosX = 0;
					me._minipanover.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._minipanover.ggHorScrollVisible || vertScrollWasVisible != me._minipanover.ggVertScrollVisible) {
					me.updateSize(me._minipanover);
					me._minipanover.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner0=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 190;
		el.ggHeight = 80;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner0.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner0.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner0.ggInstances.length; i++) {
					if (me._thumbnail_cloner0.ggInstances[i]._thumbnail_active0 && me._thumbnail_cloner0.ggInstances[i]._thumbnail_active0.logicBlock_bordercolor) {
						me._thumbnail_cloner0.ggInstances[i]._thumbnail_active0.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner0.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner0.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner0.ggInstances.length; i++) {
					if (me._thumbnail_cloner0.ggInstances[i]._node_text0 && me._thumbnail_cloner0.ggInstances[i]._node_text0.logicBlock_visible) {
						me._thumbnail_cloner0.ggInstances[i]._node_text0.logicBlock_visible();
					}
					if (me._thumbnail_cloner0.ggInstances[i]._node_text20 && me._thumbnail_cloner0.ggInstances[i]._node_text20.logicBlock_visible) {
						me._thumbnail_cloner0.ggInstances[i]._node_text20.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner0.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner0.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner0.ggInstances.length; i++) {
					if (me._thumbnail_cloner0.ggInstances[i]._checker0 && me._thumbnail_cloner0.ggInstances[i]._checker0.logicBlock_visible) {
						me._thumbnail_cloner0.ggInstances[i]._checker0.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner0.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner0.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner0.ggInstances.length; i++) {
					if (me._thumbnail_cloner0.ggInstances[i]._checkervisited0 && me._thumbnail_cloner0.ggInstances[i]._checkervisited0.logicBlock_visible) {
						me._thumbnail_cloner0.ggInstances[i]._checkervisited0.logicBlock_visible();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner0.ggUpdating == true) return;
			me._thumbnail_cloner0.ggUpdating = true;
			var el=me._thumbnail_cloner0;
			var curNumRows = 0;
			curNumRows = el.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner0.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner0.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner0.ggWidth) + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner0_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
				}
			}
			me._thumbnail_cloner0.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner0.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner0.callChildLogicBlocks_active();
			me._thumbnail_cloner0.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner0.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner0.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner0.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner0.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="Thumbnail Cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : 5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner0.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner0.childNodes.length; i++) {
				var child=me._thumbnail_cloner0.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner0.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner0.ggUpdate();
		}
		me._thumbnail_cloner0.ggNodeChange=function () {
			me._thumbnail_cloner0.ggUpdateConditionNodeChange();
		}
		me._minipanover__content.appendChild(me._thumbnail_cloner0);
		me.divSkin.appendChild(me._minipanover);
		el=me._minipanohor=document.createElement('div');
		els=me._minipanohor__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 86px;';
		hs+='left : 50%;';
		hs+='margin-left : -97px;';
		hs+='margin-top : -43px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 194px;';
		hs+="";
		els.setAttribute('style',hs);
		me._minipanohor.ggScrollByX = function(diffX) {
			if(!me._minipanohor.ggHorScrollVisible || diffX == 0) return;
			me._minipanohor.ggScrollPosX = (me._minipanohor__horScrollFg.offsetLeft + diffX);
			me._minipanohor.ggScrollPosX = Math.max(me._minipanohor.ggScrollPosX, 0);
			me._minipanohor.ggScrollPosX = Math.min(me._minipanohor.ggScrollPosX, me._minipanohor__horScrollBg.offsetWidth - me._minipanohor__horScrollFg.offsetWidth);
			me._minipanohor__horScrollFg.style.left = me._minipanohor.ggScrollPosX + 'px';
			me._minipanohor__content.style.left = -(Math.round(me._minipanohor.ggScrollPosX / me._minipanohor.ggHPercentVisible)) + me._minipanohor.ggContentLeftOffset + 'px';
			me._minipanohor.ggScrollPosXPercent = (me._minipanohor__horScrollFg.offsetLeft / me._minipanohor__horScrollBg.offsetWidth);
		}
		me._minipanohor.ggScrollByXSmooth = function(diffX) {
			if(!me._minipanohor.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._minipanohor.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._minipanohor.ggScrollPosX >= me._minipanohor__horScrollBg.offsetWidth - me._minipanohor__horScrollFg.offsetWidth)) {
					me._minipanohor.ggScrollPosX = Math.min(me._minipanohor.ggScrollPosX, me._minipanohor__horScrollBg.offsetWidth - me._minipanohor__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._minipanohor.ggScrollPosX <= 0)) {
					me._minipanohor.ggScrollPosX = Math.max(me._minipanohor.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._minipanohor__horScrollFg.style.left = me._minipanohor.ggScrollPosX + 'px';
			me._minipanohor__content.style.left = -(Math.round(me._minipanohor.ggScrollPosX / me._minipanohor.ggHPercentVisible)) + me._minipanohor.ggContentLeftOffset + 'px';
			me._minipanohor.ggScrollPosXPercent = (me._minipanohor__horScrollFg.offsetLeft / me._minipanohor__horScrollBg.offsetWidth);
			}, 10);
		}
		me._minipanohor.ggScrollByY = function(diffY) {
			if(!me._minipanohor.ggVertScrollVisible || diffY == 0) return;
			me._minipanohor.ggScrollPosY = (me._minipanohor__vertScrollFg.offsetTop + diffY);
			me._minipanohor.ggScrollPosY = Math.max(me._minipanohor.ggScrollPosY, 0);
			me._minipanohor.ggScrollPosY = Math.min(me._minipanohor.ggScrollPosY, me._minipanohor__vertScrollBg.offsetHeight - me._minipanohor__vertScrollFg.offsetHeight);
			me._minipanohor__vertScrollFg.style.top = me._minipanohor.ggScrollPosY + 'px';
			me._minipanohor__content.style.top = -(Math.round(me._minipanohor.ggScrollPosY / me._minipanohor.ggVPercentVisible)) + me._minipanohor.ggContentTopOffset + 'px';
			me._minipanohor.ggScrollPosYPercent = (me._minipanohor__vertScrollFg.offsetTop / me._minipanohor__vertScrollBg.offsetHeight);
		}
		me._minipanohor.ggScrollByYSmooth = function(diffY) {
			if(!me._minipanohor.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._minipanohor.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._minipanohor.ggScrollPosY >= me._minipanohor__vertScrollBg.offsetHeight - me._minipanohor__vertScrollFg.offsetHeight)) {
					me._minipanohor.ggScrollPosY = Math.min(me._minipanohor.ggScrollPosY, me._minipanohor__vertScrollBg.offsetHeight - me._minipanohor__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._minipanohor.ggScrollPosY <= 0)) {
					me._minipanohor.ggScrollPosY = Math.max(me._minipanohor.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._minipanohor__vertScrollFg.style.top = me._minipanohor.ggScrollPosY + 'px';
			me._minipanohor__content.style.top = -(Math.round(me._minipanohor.ggScrollPosY / me._minipanohor.ggVPercentVisible)) + me._minipanohor.ggContentTopOffset + 'px';
			me._minipanohor.ggScrollPosYPercent = (me._minipanohor__vertScrollFg.offsetTop / me._minipanohor__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._minipanohor.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._minipanohor.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._minipanohor.ggHPercentVisible);
					me._minipanohor.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._minipanohor.offsetWidth - (me._minipanohor.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._minipanohor.offsetWidth - (me._minipanohor.ggVertScrollVisible ? 15 : 0))) * me._minipanohor.ggHPercentVisible);
					me._minipanohor.ggScrollByXSmooth(diffX);
				}
			}
			if (me._minipanohor.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._minipanohor.ggVPercentVisible);
					me._minipanohor.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._minipanohor.offsetHeight - (me._minipanohor.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._minipanohor.offsetHeight - (me._minipanohor.ggHorScrollVisible ? 15 : 0))) * me._minipanohor.ggVPercentVisible);
					me._minipanohor.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._minipanohor.ggDragLastX = t[0].clientX;
			me._minipanohor.ggDragLastY = t[0].clientY;
			me._minipanohor__content.ontouchend = function() {
				me._minipanohor__content.ontouchend = null;
				me._minipanohor__content.ontouchmove = null;
			}
			me._minipanohor__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._minipanohor.ggDragLastX;
				var diffY = t[0].clientY - me._minipanohor.ggDragLastY;
				me._minipanohor.ggDragLastX = t[0].clientX;
				me._minipanohor.ggDragLastY = t[0].clientY;
				me._minipanohor.ggScrollByX(-diffX);
				me._minipanohor.ggScrollByY(-diffY);
			}
		}
		elVertScrollBg = me._minipanohor__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 600px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._minipanohor__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 600px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._minipanohor.ggScrollPosY = 0;
		me._minipanohor.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._minipanohor.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._minipanohor.ggDragLastY;
				me._minipanohor.ggDragLastY = e.clientY;
				me._minipanohor.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._minipanohor.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffY = t[0].clientY - me._minipanohor.ggDragLastY;
				me._minipanohor.ggDragLastY = t[0].clientY;
				me._minipanohor.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._minipanohor.ggScrollHeight;
			if (e.offsetY < me._minipanohor.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._minipanohor.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._minipanohor__vertScrollBg.getBoundingClientRect();
			var diffY = me._minipanohor.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._minipanohor.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._minipanohor.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._minipanohor.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._minipanohor__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="minipanohor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : -15px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 195px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._minipanohor.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._minipanohor.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width / player.getViewerSize().height > 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._minipanohor.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._minipanohor.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._minipanohor.style[domTransition]='';
				if (me._minipanohor.ggCurrentLogicStateVisible == 0) {
					me._minipanohor.style.visibility=(Number(me._minipanohor.style.opacity)>0||!me._minipanohor.style.opacity)?'inherit':'hidden';
					me._minipanohor.ggVisible=true;
				}
				else {
					me._minipanohor.style.visibility="hidden";
					me._minipanohor.ggVisible=false;
				}
			}
		}
		me._minipanohor.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 15;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (15/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.offsetHeight;
				if (this.ggHorScrollVisible) containerHeight -= 15;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (15/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if ((me._minipanohor.ggHorScrollVisible && contentHeight > this.offsetHeight - 15) || (!me._minipanohor.ggHorScrollVisible && contentHeight > this.offsetHeight)) {
					me._minipanohor__vertScrollBg.style.visibility = 'inherit';
					me._minipanohor__vertScrollFg.style.visibility = 'inherit';
					me._minipanohor.ggVertScrollVisible = true;
				} else {
					me._minipanohor__vertScrollBg.style.visibility = 'hidden';
					me._minipanohor__vertScrollFg.style.visibility = 'hidden';
					me._minipanohor.ggVertScrollVisible = false;
				}
				if(me._minipanohor.ggVertScrollVisible) {
					me._minipanohor.ggAvailableWidth = me._minipanohor.offsetWidth - 15;
					if (me._minipanohor.ggHorScrollVisible) {
						me._minipanohor.ggAvailableHeight = me._minipanohor.offsetHeight - 15;
						me._minipanohor.ggAvailableHeightWithScale = me._minipanohor.getBoundingClientRect().height - me._minipanohor__vertScrollBg.getBoundingClientRect().width;
						me._minipanohor__cornerBg.style.visibility = 'inherit';
					} else {
						me._minipanohor.ggAvailableHeight = me._minipanohor.offsetHeight;
						me._minipanohor.ggAvailableHeightWithScale = me._minipanohor.getBoundingClientRect().height;
						me._minipanohor__cornerBg.style.visibility = 'hidden';
					}
					me._minipanohor__vertScrollBg.style.height = me._minipanohor.ggAvailableHeight + 'px';
					me._minipanohor.ggVPercentVisible = me._minipanohor.ggAvailableHeightWithScale / contentHeight;
					if (me._minipanohor.ggVPercentVisible > 1.0) me._minipanohor.ggVPercentVisible = 1.0;
					me._minipanohor.ggScrollHeight =  Math.round(me._minipanohor__vertScrollBg.offsetHeight * me._minipanohor.ggVPercentVisible);
					me._minipanohor__vertScrollFg.style.height = me._minipanohor.ggScrollHeight + 'px';
					me._minipanohor.ggScrollPosY = me._minipanohor.ggScrollPosYPercent * me._minipanohor.ggAvailableHeight;
					me._minipanohor.ggScrollPosY = Math.min(me._minipanohor.ggScrollPosY, me._minipanohor__vertScrollBg.offsetHeight - me._minipanohor__vertScrollFg.offsetHeight);
					me._minipanohor__vertScrollFg.style.top = me._minipanohor.ggScrollPosY + 'px';
					me._minipanohor__content.style.top = -(Math.round(me._minipanohor.ggScrollPosY / me._minipanohor.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				} else {
					me._minipanohor.ggAvailableWidth = me._minipanohor.offsetWidth;
					me._minipanohor.ggScrollPosY = 0;
					me._minipanohor.ggScrollPosYPercent = 0.0;
					me._minipanohor__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._minipanohor.ggHorScrollVisible || vertScrollWasVisible != me._minipanohor.ggVertScrollVisible) {
					me.updateSize(me._minipanohor);
					me._minipanohor.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 190;
		el.ggHeight = 80;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._node_text && me._thumbnail_cloner.ggInstances[i]._node_text.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._node_text.logicBlock_visible();
					}
					if (me._thumbnail_cloner.ggInstances[i]._node_text2 && me._thumbnail_cloner.ggInstances[i]._node_text2.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._node_text2.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checker && me._thumbnail_cloner.ggInstances[i]._checker.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checker.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkervisited && me._thumbnail_cloner.ggInstances[i]._checkervisited.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkervisited.logicBlock_visible();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumCols = 0;
			curNumCols = me._thumbnail_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_active();
			me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="Thumbnail Cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : 5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner.ggUpdate();
		}
		me._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		me._minipanohor__content.appendChild(me._thumbnail_cloner);
		me.divSkin.appendChild(me._minipanohor);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=1000;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 270px;';
		hs+='position : absolute;';
		hs+='top : 488px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.ggActivate=function () {
			player.setVariableValue('ht_anivar1', true);
		}
		me._timer_1.ggDeactivate=function () {
			player.setVariableValue('ht_anivar1', false);
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._thumbnail_cloner1.ggUpdate();
			me._thumbnail_cloner0.ggUpdate();
			me._thumbnail_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._minipano.ggUpdatePosition();
			me._minipanover.ggUpdatePosition();
			me._minipanohor.ggUpdatePosition();
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node2_changenode = function(){
		if(hotspotTemplates['ht_node2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node2'].length; i++) {
				if (hotspotTemplates['ht_node2'][i]._rectangle_1 && hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_scaling) {
					hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node2'][i]._rectangle_1 && hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_alpha) {
					hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node2'][i]._rectangle_1 && hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_bordercolor) {
					hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_bordercolor();
				}
				if (hotspotTemplates['ht_node2'][i]._rectangle_2 && hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_scaling) {
					hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node2'][i]._rectangle_2 && hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_alpha) {
					hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node2'][i]._rectangle_2 && hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_bordercolor) {
					hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_bordercolor();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node2_varchanged_ht_anivar1 = function(){
		if(hotspotTemplates['ht_node2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node2'].length; i++) {
				if (hotspotTemplates['ht_node2'][i]._rectangle_1 && hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_scaling) {
					hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node2'][i]._rectangle_1 && hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_alpha) {
					hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node2'][i]._rectangle_1 && hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_bordercolor) {
					hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_bordercolor();
				}
				if (hotspotTemplates['ht_node2'][i]._rectangle_2 && hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_scaling) {
					hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node2'][i]._rectangle_2 && hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_alpha) {
					hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node2'][i]._rectangle_2 && hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_bordercolor) {
					hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_bordercolor();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['move_right']) {
			player.changePanLog(-1.5,true);
		}
		if (me.elementMouseDown['move_left']) {
			player.changePanLog(1.5,true);
		}
		if (me.elementMouseDown['move_up']) {
			player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['move_down']) {
			player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['zoom_out']) {
			player.changeFovLog(1,true);
		}
		if (me.elementMouseDown['zoom_in']) {
			player.changeFovLog(-1,true);
		}
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('ht_anivar1', true);
			} else {
				player.setVariableValue('ht_anivar1', false);
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 812px;';
		hs+='position : absolute;';
		hs+='top : 409px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me.__code=document.createElement('div');
		els=me.__code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -88px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__code);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_chevron_black';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAEkUlEQVR4nO2c7YsVVRjAf+OqidGy1rJmhn+Of0EGSYWgpCiUsej3Xizrg/myXyQrVo1M1EU2rBU0Pwi+/CcVmmBCSDh9mDvs9Tr3zplzzjPzzMzzg+fTrmeee357znnmmfEmaZpi6GFN0wkYz2NClGFClGFClGFClGFClLE2dIAkSWLkEYM54M+6Lxr7tqErK+QksAC83HQiwaRpGhQK+BxIB3ENmK3z4qHz98J8tlzIJ6zKyOMMsL6uBEzIKl/woow8fgM21ZGECcn4ivEy8likhu3LhDx/ZpTFdYQP+r4LqSIjj9PAtFRCfRbisk2NixVgnURSfRXyGf4y8jgHvBk7sT4KiSEjj2VgKmZyfRMyqbT1je+JWH31SUjImVEWV4EoTbi+CPGppqrGJW'+
			'BbaKJ9EBLzzCiLCwQ2WLsuROLMcFkp3mdKl4XUsU2Ni/N4NiS7KqTObWpcLANbqybeRSFHAiYxdpwFNlZJvmtCJEtb37gBzLh+gC4J0bQyRuM7HBuSXRFS9KRPWyzjsFK6IESqtH0iMOYPlDx5bLuQo0IyvgT2CY19E9jQRSFS9xknh67xDvCPwDXOkL331RkhUgf4iYJrzQP/CVxriYIXC9soRKq0LZKRswOZlfIT8HqbhUjdgU+SkfMx8FTg2isMrZQ2CZEqbY87yMjZIZTDIoM2S1uESJW2pyrIyDmETEn8M5C0QUgTZ0YZbyGzfS0Bb2gWIlXa+qyMUQ4CfwvkdgVYq1GIlIxvIsjI2SmU40UirZRYQjRuU+M4ADwQyPUcsEGDkCZLW192As8Ecv4FmGtMCHIyqpS2vuxHZqWcBdbXLgRdpa0ve4Q+wzXgtdqE'+
			'0K4zYxJTwPvAwwi5j8Yi8Kq4EOrp2tbNXmTOlBVgWkwIcmfGMYFJrsou4BHxP9tp4JXoQujGmVHGR8itFKeSuOltqu4zo4w1ZG0Widb9IrA1WAjtvM8IZR6ZlfIrJW2WSSLWIbdNNXmAu/Ie8C/xP/u3wBbGiJkkZEkgmbbIyDmIzPZ1C9heNO+TXsWP+l+/BpwAPhQYV4rjZG2Wp5HHTYC/Cn8yYYXMkTXMYv1VxOza1s1h4j1P+R3Y7HWok714/HWEJDSVtr68S/g83KWk+ehSZU0BlwOS0FxNVSWkIXkXh/6W633IS2T7adUk2nSAu/I21efhJo5361Xu1KfJWst9XBmjzOP+4sQtYNZ5nl1/cUjMMYckuiwjZxfl83CPCjJ8hWwEfpyQRB9kQNZm2UNWvhbNw21gU+X5rfoPhsQsFCRRx5M+beym+MyY8ZrXAC'+
			'GzZF9TkSex0Mx8NMtgLj5gtXV/h4Dn6t5ChsRcIBPTS4bm4VPgPp6PbvNIBoN5kyTJFuAPsu5o78jnL0mSGWAqTdMHIeMFf5Ey8JieyhjhSYxBgleIEZeufLN1ZzAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyvgfHKwgywQ2UeQAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -250px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-5px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_chevron_white';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAFD0lEQVR4nO2c/2tXVRjHX3NmsWpoDcuM/pgg+8KIwiy0FDEpKCpjZEQRrH3JBc1pgwhDsIjKsEGMYgXTH4Lsz+jHMFMwQ8x898N1tY3P537ul/Pc89x1XvDAxoed8z7nveecc5/PvbdPEgk/rIstILGSZIgzkiHOSIY4IxnijGSIM9aSIZtjCwjBWjHkKDAL3BpbSF3WxxYQgHHgpRs/3wbsAX6LJ6cebc+QUeDNZb8/DBwCNsSRU5++FpdOJoE3uny2AOwELjQnJwxtzZApupsB8CAwAww1IyccbcyQcVYuU3n8ADwOXLaTE5a2ZUgZMwAeAKaBQRs54WlThkwBByv+7ffAMPBXODk2tCVDxqhuBsA24Dhwbxg5drQhQ8aAtwK1NQ88BvwdqL3geM'+
			'+QScKZAdmydQzHpy/PGVJnz+jFN2SZ4m7wXjNkHDszAB4FvgLuM+yjEh5rWWOUO9pWZTtwDdgFXG+gv0J4y5DQe0YvngJO4mhP8ZQh4+SXQ6zYDlwB9gFXI/S/Ai8Z0tQy1Y2ngVPA1ogaAB+GTNDsMtWNYeBdYCCmiNjHXsujbVUWyZaxizE6j5khE/gzA+B+4H0iFSRjZcgo8HaMjkswD+ym4UyJkSGT2JjxZ+D2hoHDwKbA7ebSdIYcAl43avcX4EODtk8Dj5Adje2R1FSMy4ajy/rYKekPgz4+lrRZDcxTU2ZMhJ2ffznSoa8RSdcM+pqTtL5Df60zZCr0zNygkxlLsUM2mfK5pLtz+nVvyFj4OZGUb8ZSvCrpqkHfCzLMFEszRg0mQ5JmSmjYYaThhKStJXREN2TSZh70QQUtr0m6bKDlS0l9FfQ0bkiMPaNX'+
			'PCGb5WtO0j01dJkbYnW0rZIZq+OApAsG2r5WwD2lDWYcDqhxl5HGkwqUKaEG6nGZ6hYvSjpvoPVTSbfU1RdigDGPtnUy5bqB5nnVvKL3akaZo23VeEE2mfKJpA1VddUZkKejbdXYbzSGbyXdWUVT1YG0ac/Ii35JeyT9bjCWE5LuKKupyiCaqNo2Hc/LZk9ZkDRYRktZ4VZ7xnRJHRaxV9JFg7F9JOn2ojrKCF4Le0aveEV2mVLoSFxUqNUy1fSe0SvWKSuzWJTuCxUki4hs43VG3RiRTaZ8px5lljxRN8lumYq5gReN3ZKuGIz9mKQt6mJMnqA5AzFSO8xYigOyWb7OSNrWqc+824D6De6pOAK8bNCuFTNkjyuEvgm7DzjX8ZOc/47NygpmoQhZtW06Dirc9ymnJd3Vra9eQgYkvRdAhKejbdV4JsA8nFWP4mMRIf'+
			'2STtUQ4fk0VTbqFCTPqkB9q6iQm5VVYMvSpg28aDxZYR4WVfBqvYyQQWWl5aKspcxYHSMqfuPEGUlDRduuIma6gIi1bMZS7C0wDz+rhBmqaMiApM9yRPwfzEBZmWW/pHNd5uFHSZvKtltH0GwHEU180+ctnu0wD4uSNlZpr46QIUnHl4mYdTA5seI5/Ve6/0k1vlcP8XzIF2QPy+yr21DLeQd4iOy9j+erNhLCkC3Arzh6G0IkNpKVmyqbAWFeHHCJZAYEeo1g7MeiE6vw8OKAxDKSIc5IhjgjGeKMZIgzkiHOSIY4IxnijGSIM5IhzkiGOCMZ4oxkiDOSIc5IhjgjGeKMZIgzkiHOSIY4IxnijGSIM5IhzkiGOCMZ4oxkiDOSIc5IhjgjGeKMZIgzkiHOSIY4IxnijGSIM5IhzvgHcm/aRUD3KqQAAAAASUVORK5C'+
			'YII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAFyElEQVR4nO2cW29UVRSAv9pBDV6ClxCPGv+LJFQaKlYIiNpWbKvGKxq8i0rtxTZIr4NKFI23aij6AA8aX9AHE/XFn3GieCca1IP1YXe0M86Zc1v7nHWm+3uCzsyaHT7W3muvvXs6lpeXcejhvKIH4KjHCVGGE6IMJ0QZTogynBBlVLIG8AOJYYiwEfgu7y/1Mv8L1tMuGTIPVIGLih5IVoT9FsIY8ODKny8GBoDvixtONsqeISPAM6v+3g1MAucXM5zslFnIBPBck58PASeAy/IdjgxlFTIFPNXi9RuAWeDKfIYjRxmFjAGPx3jfALBIyRb6sgkZo37NiGIzMA1camc48pRJyBTJZNS4G1gC1skOxw5lETJKvGkqjC7gDeBameHYowz7kFFgv0CcPm'+
			'AD0AucE4hnBe0ZMoGMjBo9wGsorr40Z8gU2aapMO4ErsBkirrza60ZEre0Tcs2zEJ/ncXvSIXGDBklXTWVlB1AANwG/J3D98VCW4ZIrxlR3AIcQ9GaoilDxmjdDrHFDuAsMAj8WcD316ElQ/KapsK4HfgQuKbAMQA6hIyT7zQVRg/wIrC+yEEULWQKeLrgMaymHziJ2UAWQpFCxrFb2qZlE3CIghqSRQkZQVdmNDIIvEcBmVKEkLCTvqz8LhyvB5gh55PHvIVMYqe0nQT2WYi7B1N9XWghdlPyFDIGPGEh7gJG8quYXfdvwvGvx1wx2igctyl5CRnHzj5jHnho1d/fB55Hvr0+BBwhh410HkJslbbzwN4mPz8E3Ip8pvQC7wBXCcetw7aQrCd9YYTJqLEEPAv8Jfy9u4G3sJgpNoWMYGcHPkdrGTVmMC0RabqAo1hq'+
			's9gSYqu0rQIPJ3j/EiZDpUviAcxtlg7huFaERF1iS8s8/93hTcJB4A7kp69dwEd+wNWSQaWF2DrpqxJvmgrjOGZcP8sM5196gaofyK0pkkKSXmKLyyzpMqNZnPsF4jRyM7AolSlSQtJeYotiHnhEMN4i8ADwo2BMgJ3AlB9k39FLCCmqtE3LYUzGSd846QOO+0G2HX0mIX4gdomtkbilbVpsZcpW4CU/SP/7KR1pH63hB0xgp5qqIrNmxGEYc3FOmo+Bfq/CD0k/mCpD/EBdaZuWNzEl8U/CcbuBaT/g8qQfTJwhfmCtmlqgvlGYJ/cAryC/0fsU2OlV+DXuBxJlyMqaYUPGDMXJANPJHQR+EY7bBRz0Ay6J+4HYGdIma0YUezH/OWxkyk1ehbNRb4yVISvTVDusGVEsYFoi0q37LuCIH0Q3JCMzxGJpa2ufIcE+TA'+
			'9MOlM+AW70KoQ+/yJUiB+wDtNCt5EZRS7gcenHlMQXCMd9HdMJP91MTKsp6xhrVwaY08EnkZ++hjFHzZuavdhKSKfwQMDswMsgo8Ys5uKE9CXsDuB0sxdaCRkG3hUcxCzJDpe0cALZ4+DPgF1ehW+avdhyUfcD1gMHgMcyDkJTaZuWPsw0loWvgG1eJfwxUnGqrE7MerI95SA0V1NJuQ/T3U7cEsHI2BrV34rch3gVzmHm0bkUg1igfWQAvAzcm+Jzp4DNcZqNsTaGXoU/MKVakpRtvMTWLhwDHiX+xYnPMWvGmThvTtNcnCb6FK+dpqkw9mC6xa34GjNNxX6gWpr2+37MAU8Ya0EGwNvAXYQ/ve4LYEsSGZDtgKrK/y8NzFHO0jYLQ5jd92pOAdu9SvJbLlmOcA9Qn7KHWXsy8CocxZyn1Fr3XwK708iADBlSww/4'+
			'ALPADWYKVFJqj4n1A14AtgDdaY5ua0gI8YBvUfQ0hDxZJWQD0JlFBsjc4j7DGpXRgEgTMnOGOGQp+vfUHQ04IcpwQpThhCjDCVGGE6IMJ0QZTogynBBlOCHKcEKU4YQowwlRhhOiDCdEGU6IMpwQZTghynBClOGEKMMJUYYTogwnRBlOiDKcEGU4IcpwQpThhCjDCVGGE6IMJ0QZTogynBBlOCHK+AcpmztK5sBm4wAAAABJRU5ErkJggg==';
		me._chevron_white__img.ggOverSrc=hs;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -250px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.8;
				}
			}
		}
		me._chevron_white.onmouseover=function (e) {
			me._chevron_white__img.src=me._chevron_white__img.ggOverSrc;
		}
		me._chevron_white.onmouseout=function (e) {
			me._chevron_white__img.src=me._chevron_white__img.ggNormalSrc;
		}
		me._chevron_white.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white);
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_node2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node2=document.createElement('div');
		el.ggId="ht_node2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 264px;';
		hs+='position : absolute;';
		hs+='top : 281px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node2.onclick=function (e) {
			player.startAutorotate("0.05");
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node2.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node2.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			player.stopAutorotate();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node2.onmouseout=function (e) {
			player.setActiveHotspot(null);
			player.startAutorotate("0.05");
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node2.ggUpdatePosition=function (useTransition) {
		}
		el=me._upanicircle=document.createElement('div');
		el.ggId="upanicircle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -29px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._upanicircle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._upanicircle.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 4px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 76px;';
		hs+='left : -11px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 76px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_anivar1') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms, border-color 1000ms ease 0ms';
				if (me._rectangle_1.ggCurrentLogicStateScaling == 0) {
					me._rectangle_1.ggParameter.sx = 1;
					me._rectangle_1.ggParameter.sy = 1;
					me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
				}
				else {
					me._rectangle_1.ggParameter.sx = 0.5;
					me._rectangle_1.ggParameter.sy = 0.5;
					me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
				}
			}
		}
		me._rectangle_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_anivar1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms, border-color 1000ms ease 0ms';
				if (me._rectangle_1.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._rectangle_1.style.opacity == 0.0) { me._rectangle_1.style.visibility="hidden"; } }, 1005);
					me._rectangle_1.style.opacity=0;
				}
				else {
					me._rectangle_1.style.visibility=me._rectangle_1.ggVisible?'inherit':'hidden';
					me._rectangle_1.style.opacity=1;
				}
			}
		}
		me._rectangle_1.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('ht_anivar1') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_1.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms, border-color 1000ms ease 0ms';
				if (me._rectangle_1.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_1.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._rectangle_1.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._upanicircle.appendChild(me._rectangle_1);
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 4px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 76px;';
		hs+='left : -11px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : hidden;';
		hs+='width : 76px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_anivar1') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_2.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms, border-color 1000ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStateScaling == 0) {
					me._rectangle_2.ggParameter.sx = 0.5;
					me._rectangle_2.ggParameter.sy = 0.5;
					me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
				}
				else {
					me._rectangle_2.ggParameter.sx = 1;
					me._rectangle_2.ggParameter.sy = 1;
					me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
				}
			}
		}
		me._rectangle_2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_anivar1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_2.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms, border-color 1000ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_2.style.visibility=me._rectangle_2.ggVisible?'inherit':'hidden';
					me._rectangle_2.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._rectangle_2.style.opacity == 0.0) { me._rectangle_2.style.visibility="hidden"; } }, 1005);
					me._rectangle_2.style.opacity=0;
				}
			}
		}
		me._rectangle_2.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('ht_anivar1') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_2.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_2.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms, border-color 1000ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_2.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._rectangle_2.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		me._upanicircle.appendChild(me._rectangle_2);
		me._ht_node2.appendChild(me._upanicircle);
		me.__div = me._ht_node2;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
		} else
		{
			hotspot.skinid = 'ht_node2';
			hsinst = new SkinHotspotClass_ht_node2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node2_changenode();;
			me.callChildLogicBlocksHotspot_ht_node2_varchanged_ht_anivar1();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node2'].length; i++) {
				hotspotTemplates['ht_node2'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_thumbnail_cloner1_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 195px; height: 80px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage1=document.createElement('div');
		els=me._thumbnail_nodeimage1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage1_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Thumbnail NodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 75px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage1.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
		}
		me._thumbnail_nodeimage1.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_nodeimage1']=true;
			me._node_text1.logicBlock_visible();
			me._node_text21.logicBlock_visible();
		}
		me._thumbnail_nodeimage1.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_nodeimage1']=false;
			me._node_text1.logicBlock_visible();
			me._node_text21.logicBlock_visible();
		}
		me._thumbnail_nodeimage1.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_nodeimage1']=false;
			me._node_text1.logicBlock_visible();
			me._node_text21.logicBlock_visible();
		}
		me._thumbnail_nodeimage1.ggUpdatePosition=function (useTransition) {
		}
		el=me._checkervisited1=document.createElement('div');
		els=me._checkervisited1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojZmZmZmZmO30mI3hkOwoJLnN0MXtmaWxsOiMwMDAwMDA7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEu'+
			'N2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNS'+
			'wxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._checkervisited1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkervisited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 3px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkervisited1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkervisited1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkervisited1.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkervisited1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkervisited1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkervisited1.style[domTransition]='';
				if (me._checkervisited1.ggCurrentLogicStateVisible == 0) {
					me._checkervisited1.style.visibility=(Number(me._checkervisited1.style.opacity)>0||!me._checkervisited1.style.opacity)?'inherit':'hidden';
					me._checkervisited1.ggVisible=true;
				}
				else {
					me._checkervisited1.style.visibility="hidden";
					me._checkervisited1.ggVisible=false;
				}
			}
		}
		me._checkervisited1.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage1.appendChild(me._checkervisited1);
		el=me._checker1=document.createElement('div');
		els=me._checker1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojZmZmZmZmO30mI3hkOwoJLnN0MXtmaWxsOiNmZjAwMDA7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEu'+
			'N2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNS'+
			'wxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._checker1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checker";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checker1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checker1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._checker1.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checker1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checker1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checker1.style[domTransition]='';
				if (me._checker1.ggCurrentLogicStateVisible == 0) {
					me._checker1.style.visibility=(Number(me._checker1.style.opacity)>0||!me._checker1.style.opacity)?'inherit':'hidden';
					me._checker1.ggVisible=true;
				}
				else {
					me._checker1.style.visibility="hidden";
					me._checker1.ggVisible=false;
				}
			}
		}
		me._checker1.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage1.appendChild(me._checker1);
		el=me._thumbnail_active1=document.createElement('div');
		el.ggId="Thumbnail Active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #a6a6a6;';
		hs+='cursor : pointer;';
		hs+='height : 73px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 188px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active1.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['thumbnail_active1'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active1.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active1.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active1.style[domTransition]='border-color 0s';
				if (me._thumbnail_active1.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active1.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active1.style.borderColor="rgba(166,166,166,1)";
				}
			}
		}
		me._thumbnail_active1.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active1']=true;
			me._thumbnail_active1.logicBlock_bordercolor();
		}
		me._thumbnail_active1.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active1']=false;
			me._thumbnail_active1.logicBlock_bordercolor();
		}
		me._thumbnail_active1.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active1']=false;
			me._thumbnail_active1.logicBlock_bordercolor();
		}
		me._thumbnail_active1.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage1.appendChild(me._thumbnail_active1);
		el=me._node_text1=document.createElement('div');
		els=me._node_text1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node Text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 55px;';
		hs+='visibility : hidden;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 190px;';
		hs+='height: 20px;';
		hs+='background: #8f8f8f;';
		hs+='background: rgba(143,143,143,0.588235);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(36,36,36,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>"+me.ggUserdata.description+"<\/b>";
		el.appendChild(els);
		me._node_text1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_text1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail_nodeimage1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_text1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_text1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_text1.style[domTransition]='';
				if (me._node_text1.ggCurrentLogicStateVisible == 0) {
					me._node_text1.style.visibility=(Number(me._node_text1.style.opacity)>0||!me._node_text1.style.opacity)?'inherit':'hidden';
					me._node_text1.ggVisible=true;
				}
				else {
					me._node_text1.style.visibility="hidden";
					me._node_text1.ggVisible=false;
				}
			}
		}
		me._node_text1.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage1.appendChild(me._node_text1);
		el=me._node_text21=document.createElement('div');
		els=me._node_text21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node Text2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : hidden;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 190px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>"+me.ggUserdata.description+"<\/b>";
		el.appendChild(els);
		me._node_text21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_text21.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail_nodeimage1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_text21.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_text21.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_text21.style[domTransition]='';
				if (me._node_text21.ggCurrentLogicStateVisible == 0) {
					me._node_text21.style.visibility=(Number(me._node_text21.style.opacity)>0||!me._node_text21.style.opacity)?'inherit':'hidden';
					me._node_text21.ggVisible=true;
				}
				else {
					me._node_text21.style.visibility="hidden";
					me._node_text21.ggVisible=false;
				}
			}
		}
		me._node_text21.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage1.appendChild(me._node_text21);
		me.__div.appendChild(me._thumbnail_nodeimage1);
	};
	function SkinCloner_thumbnail_cloner0_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 190px; height: 80px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage0=document.createElement('div');
		els=me._thumbnail_nodeimage0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Thumbnail NodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 75px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage0.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
		}
		me._thumbnail_nodeimage0.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_nodeimage0']=true;
			me._node_text0.logicBlock_visible();
			me._node_text20.logicBlock_visible();
		}
		me._thumbnail_nodeimage0.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_nodeimage0']=false;
			me._node_text0.logicBlock_visible();
			me._node_text20.logicBlock_visible();
		}
		me._thumbnail_nodeimage0.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_nodeimage0']=false;
			me._node_text0.logicBlock_visible();
			me._node_text20.logicBlock_visible();
		}
		me._thumbnail_nodeimage0.ggUpdatePosition=function (useTransition) {
		}
		el=me._checkervisited0=document.createElement('div');
		els=me._checkervisited0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojZmZmZmZmO30mI3hkOwoJLnN0MXtmaWxsOiMwMDAwMDA7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEu'+
			'N2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNS'+
			'wxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._checkervisited0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkervisited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 3px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkervisited0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkervisited0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkervisited0.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkervisited0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkervisited0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkervisited0.style[domTransition]='';
				if (me._checkervisited0.ggCurrentLogicStateVisible == 0) {
					me._checkervisited0.style.visibility=(Number(me._checkervisited0.style.opacity)>0||!me._checkervisited0.style.opacity)?'inherit':'hidden';
					me._checkervisited0.ggVisible=true;
				}
				else {
					me._checkervisited0.style.visibility="hidden";
					me._checkervisited0.ggVisible=false;
				}
			}
		}
		me._checkervisited0.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage0.appendChild(me._checkervisited0);
		el=me._checker0=document.createElement('div');
		els=me._checker0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojZmZmZmZmO30mI3hkOwoJLnN0MXtmaWxsOiNmZjAwMDA7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEu'+
			'N2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNS'+
			'wxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._checker0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checker";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checker0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checker0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._checker0.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checker0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checker0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checker0.style[domTransition]='';
				if (me._checker0.ggCurrentLogicStateVisible == 0) {
					me._checker0.style.visibility=(Number(me._checker0.style.opacity)>0||!me._checker0.style.opacity)?'inherit':'hidden';
					me._checker0.ggVisible=true;
				}
				else {
					me._checker0.style.visibility="hidden";
					me._checker0.ggVisible=false;
				}
			}
		}
		me._checker0.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage0.appendChild(me._checker0);
		el=me._thumbnail_active0=document.createElement('div');
		el.ggId="Thumbnail Active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #a6a6a6;';
		hs+='cursor : pointer;';
		hs+='height : 73px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 183px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active0.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['thumbnail_active0'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active0.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active0.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active0.style[domTransition]='border-color 0s';
				if (me._thumbnail_active0.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active0.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active0.style.borderColor="rgba(166,166,166,1)";
				}
			}
		}
		me._thumbnail_active0.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active0']=true;
			me._thumbnail_active0.logicBlock_bordercolor();
		}
		me._thumbnail_active0.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active0']=false;
			me._thumbnail_active0.logicBlock_bordercolor();
		}
		me._thumbnail_active0.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active0']=false;
			me._thumbnail_active0.logicBlock_bordercolor();
		}
		me._thumbnail_active0.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage0.appendChild(me._thumbnail_active0);
		el=me._node_text0=document.createElement('div');
		els=me._node_text0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node Text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 55px;';
		hs+='visibility : hidden;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 185px;';
		hs+='height: 20px;';
		hs+='background: #8f8f8f;';
		hs+='background: rgba(143,143,143,0.588235);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(36,36,36,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>"+me.ggUserdata.description+"<\/b>";
		el.appendChild(els);
		me._node_text0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_text0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail_nodeimage0'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_text0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_text0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_text0.style[domTransition]='';
				if (me._node_text0.ggCurrentLogicStateVisible == 0) {
					me._node_text0.style.visibility=(Number(me._node_text0.style.opacity)>0||!me._node_text0.style.opacity)?'inherit':'hidden';
					me._node_text0.ggVisible=true;
				}
				else {
					me._node_text0.style.visibility="hidden";
					me._node_text0.ggVisible=false;
				}
			}
		}
		me._node_text0.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage0.appendChild(me._node_text0);
		el=me._node_text20=document.createElement('div');
		els=me._node_text20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node Text2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : hidden;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 185px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>"+me.ggUserdata.description+"<\/b>";
		el.appendChild(els);
		me._node_text20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_text20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail_nodeimage0'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_text20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_text20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_text20.style[domTransition]='';
				if (me._node_text20.ggCurrentLogicStateVisible == 0) {
					me._node_text20.style.visibility=(Number(me._node_text20.style.opacity)>0||!me._node_text20.style.opacity)?'inherit':'hidden';
					me._node_text20.ggVisible=true;
				}
				else {
					me._node_text20.style.visibility="hidden";
					me._node_text20.ggVisible=false;
				}
			}
		}
		me._node_text20.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage0.appendChild(me._node_text20);
		me.__div.appendChild(me._thumbnail_nodeimage0);
	};
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 190px; height: 80px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage=document.createElement('div');
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Thumbnail NodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 75px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
		}
		me._thumbnail_nodeimage.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=true;
			me._node_text.logicBlock_visible();
			me._node_text2.logicBlock_visible();
		}
		me._thumbnail_nodeimage.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=false;
			me._node_text.logicBlock_visible();
			me._node_text2.logicBlock_visible();
		}
		me._thumbnail_nodeimage.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=false;
			me._node_text.logicBlock_visible();
			me._node_text2.logicBlock_visible();
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		el=me._checkervisited=document.createElement('div');
		els=me._checkervisited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojZmZmZmZmO30mI3hkOwoJLnN0MXtmaWxsOiMwMDAwMDA7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEu'+
			'N2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNS'+
			'wxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._checkervisited__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkervisited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 3px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkervisited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkervisited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkervisited.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkervisited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkervisited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkervisited.style[domTransition]='';
				if (me._checkervisited.ggCurrentLogicStateVisible == 0) {
					me._checkervisited.style.visibility=(Number(me._checkervisited.style.opacity)>0||!me._checkervisited.style.opacity)?'inherit':'hidden';
					me._checkervisited.ggVisible=true;
				}
				else {
					me._checkervisited.style.visibility="hidden";
					me._checkervisited.ggVisible=false;
				}
			}
		}
		me._checkervisited.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage.appendChild(me._checkervisited);
		el=me._checker=document.createElement('div');
		els=me._checker__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojZmZmZmZmO30mI3hkOwoJLnN0MXtmaWxsOiNmZjAwMDA7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEu'+
			'N2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNS'+
			'wxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._checker__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checker";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checker.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checker.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._checker.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checker.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checker.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checker.style[domTransition]='';
				if (me._checker.ggCurrentLogicStateVisible == 0) {
					me._checker.style.visibility=(Number(me._checker.style.opacity)>0||!me._checker.style.opacity)?'inherit':'hidden';
					me._checker.ggVisible=true;
				}
				else {
					me._checker.style.visibility="hidden";
					me._checker.ggVisible=false;
				}
			}
		}
		me._checker.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage.appendChild(me._checker);
		el=me._thumbnail_active=document.createElement('div');
		el.ggId="Thumbnail Active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #a6a6a6;';
		hs+='cursor : pointer;';
		hs+='height : 73px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 183px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['thumbnail_active'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(166,166,166,1)";
				}
			}
		}
		me._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage.appendChild(me._thumbnail_active);
		el=me._node_text=document.createElement('div');
		els=me._node_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node Text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 55px;';
		hs+='visibility : hidden;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 185px;';
		hs+='height: 20px;';
		hs+='background: #8f8f8f;';
		hs+='background: rgba(143,143,143,0.588235);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(36,36,36,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>"+me.ggUserdata.description+"<\/b>";
		el.appendChild(els);
		me._node_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_text.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail_nodeimage'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_text.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_text.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_text.style[domTransition]='';
				if (me._node_text.ggCurrentLogicStateVisible == 0) {
					me._node_text.style.visibility=(Number(me._node_text.style.opacity)>0||!me._node_text.style.opacity)?'inherit':'hidden';
					me._node_text.ggVisible=true;
				}
				else {
					me._node_text.style.visibility="hidden";
					me._node_text.ggVisible=false;
				}
			}
		}
		me._node_text.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage.appendChild(me._node_text);
		el=me._node_text2=document.createElement('div');
		els=me._node_text2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node Text2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : hidden;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 185px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>"+me.ggUserdata.description+"<\/b>";
		el.appendChild(els);
		me._node_text2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_text2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail_nodeimage'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_text2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_text2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_text2.style[domTransition]='';
				if (me._node_text2.ggCurrentLogicStateVisible == 0) {
					me._node_text2.style.visibility=(Number(me._node_text2.style.opacity)>0||!me._node_text2.style.opacity)?'inherit':'hidden';
					me._node_text2.ggVisible=true;
				}
				else {
					me._node_text2.style.visibility="hidden";
					me._node_text2.ggVisible=false;
				}
			}
		}
		me._node_text2.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage.appendChild(me._node_text2);
		me.__div.appendChild(me._thumbnail_nodeimage);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._minipanover.logicBlock_visible();
	me._minipanohor.logicBlock_visible();
	me._rectangle_3.logicBlock_visible();
	me._controller2.logicBlock_visible();
	me._controller.logicBlock_visible();
	me._controller3.logicBlock_visible();
	me._controllermobile.logicBlock_visible();
	me._minipano.logicBlock_visible();
	me._enter_vr.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._minipanover.logicBlock_visible();me._minipanohor.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._rectangle_3.logicBlock_visible();me._controller2.logicBlock_visible();me._controller.logicBlock_visible();me._controller3.logicBlock_visible();me._controllermobile.logicBlock_visible();me._minipano.logicBlock_visible();me._minipanover.logicBlock_visible();me._minipanohor.logicBlock_visible(); });
	player.addListener('vrchanged', function(args) { me._enter_vr.logicBlock_visible(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner1.callChildLogicBlocks_mouseover();me._thumbnail_cloner0.callChildLogicBlocks_mouseover();me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner1.callChildLogicBlocks_mouseover();me._thumbnail_cloner0.callChildLogicBlocks_mouseover();me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner1.callChildLogicBlocks_active();me._thumbnail_cloner0.callChildLogicBlocks_active();me._thumbnail_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._thumbnail_cloner1.callChildLogicBlocks_changevisitednodes();me._thumbnail_cloner0.callChildLogicBlocks_changevisitednodes();me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node2_changenode(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover(); });
	player.addListener('varchanged_ht_anivar1', function(args) { me.callChildLogicBlocksHotspot_ht_node2_varchanged_ht_anivar1(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};