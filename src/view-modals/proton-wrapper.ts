
var proton = require("proton");

declare var Proton : any;
export function createParticlesEmitter(proton:any, data:any) {
	var emitter = new Proton.Emitter();
	
	if(data.rateNum && data.rateTime) {
		emitter.rate = new Proton.Rate(new Proton.Span(data.rateNum.first, data.rateNum.second), 
			new Proton.Span(data.rateTime.first, data.rateTime.second));
	}
	if(data.mass) {
		emitter.addInitialize(new Proton.Mass(data.mass.first, data.mass.second));
	}
	if(data.radius) {
		emitter.addInitialize(new Proton.Radius(data.radius.first, data.radius.second));
	}
	if(data.life) {
		emitter.addInitialize(new Proton.Life(data.life.first, data.life.second));
	}
	if(data.vRpan && data.vType && data.vThapan) {
		var velocity = new Proton.Velocity(new Proton.Span(data.vRpan.first, data.vRpan.second), 
				new Proton.Span(data.vThapan.first, data.vThapan.second), data.vType);
		emitter.addInitialize(velocity);
	}

	if(data.driftPoint) {
		emitter.addBehaviour(new Proton.RandomDrift(data.driftPoint.x, data.driftPoint.y, data.driftDelay));
	}
	if(data.colorBegin && data.colorEnd) {
		emitter.addBehaviour(new Proton.Color(data.colorBegin, data.colorEnd, Infinity, Proton.easeOutQuart));
	}
	if(data.scale) {
		emitter.addBehaviour(new Proton.Scale(data.scale.first, data.scale.second));
	}
	if(data.alpha) {
		emitter.addBehaviour(new Proton.Alpha(data.alpha.first, data.alpha.second));
	}

	if(data.position) {
		emitter.p.x = data.position.x;
		emitter.p.y = data.position.y;
	}else{
		emitter.p.x = 100;
		emitter.p.y = 100;
	}

	emitter.emit();
	proton.addEmitter(emitter);

	return emitter;
}

