export class AudioSystem{
  constructor(){this.enabled=true;this.ctx=null;this.master=null;this.ambient=null;this.nextStep=0;this.nextAlarm=0;this.music={ids:['Y3jq_WIHP9k','uM91oUKj9ac','1xHLdfCIbiY'],index:0,player:null,ready:false,wantsPlay:false,apiRequested:false,container:null};this.setupMusicPlayer()}
  setupMusicPlayer(){
    if(typeof document==='undefined')return;
    const container=document.createElement('div');container.id='music-player';container.setAttribute('aria-hidden','true');document.body.appendChild(container);this.music.container=container;
    const create=()=>{if(this.music.player||!window.YT?.Player)return;this.music.player=new window.YT.Player(container,{videoId:this.music.ids[0],width:'1',height:'1',playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,playsinline:1,rel:0,origin:location.origin},events:{onReady:()=>{this.music.ready=true;const frame=container.querySelector('iframe');frame?.setAttribute('allow','autoplay; encrypted-media');this.music.player.setVolume(48);if(this.music.wantsPlay)this.playMusic()},onStateChange:event=>{if(window.YT?.PlayerState&&event.data===window.YT.PlayerState.ENDED)this.nextMusic()}}})};
    if(window.YT?.Player){create();return}
    if(!this.music.apiRequested){this.music.apiRequested=true;const previous=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{if(typeof previous==='function')previous();create()};const script=document.createElement('script');script.src='https://www.youtube.com/iframe_api';script.async=true;document.head.appendChild(script)}
  }
  playMusic(){if(!this.enabled||!this.music.ready)return;this.music.wantsPlay=true;this.music.player.setVolume(48);this.music.player.playVideo()}
  pauseMusic(){this.music.wantsPlay=false;if(this.music.ready)this.music.player.pauseVideo()}
  nextMusic(){if(!this.music.ready)return;this.music.index=(this.music.index+1)%this.music.ids.length;this.music.player.loadVideoById(this.music.ids[this.music.index]);this.music.wantsPlay=true}
  ensure(){if(!this.enabled)return false;const AudioContext=window.AudioContext||window.webkitAudioContext;if(!AudioContext)return false;if(!this.ctx){this.ctx=new AudioContext();this.master=this.ctx.createGain();this.master.gain.value=.7;this.master.connect(this.ctx.destination)}if(this.ctx.state==='suspended')this.ctx.resume();return true}
  tone(freq=440,duration=.09,type='square',volume=.035,delay=0){if(!this.ensure())return;const now=this.ctx.currentTime+delay,o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type=type;o.frequency.setValueAtTime(freq,now);g.gain.setValueAtTime(volume,now);g.gain.exponentialRampToValueAtTime(.001,now+duration);o.connect(g).connect(this.master);o.start(now);o.stop(now+duration)}
  start(){this.playMusic();if(!this.ensure()||this.ambient)return;const osc=this.ctx.createOscillator(),gain=this.ctx.createGain(),lfo=this.ctx.createOscillator(),lfoGain=this.ctx.createGain();osc.type='sawtooth';osc.frequency.value=47;gain.gain.value=.012;lfo.frequency.value=.18;lfoGain.gain.value=.004;lfo.connect(lfoGain).connect(gain.gain);osc.connect(gain).connect(this.master);osc.start();lfo.start();this.ambient={osc,gain,lfo}}
  event(name){const events={jump:[320,.055,'square',.035],checkpoint:[740,.15,'square',.04],death:[120,.24,'sawtooth',.045],hit:[520,.08,'square',.05],win:[880,.4,'square',.05],punch:[250,.05,'square',.03],defeat:[920,.28,'square',.05]};const e=events[name];if(e)this.tone(...e)}
  update({moving=false,grounded=false,hunter=false,now=0}){if(!this.enabled)return;if(moving&&grounded&&now>=this.nextStep){this.tone(95,.045,'square',.012);this.nextStep=now+.31}if(hunter&&now>=this.nextAlarm){this.tone(630,.08,'square',.018);this.tone(420,.1,'square',.014,.1);this.nextAlarm=now+2.4}}
  setEnabled(on){this.enabled=on;if(on){this.ensure();this.start()}else{this.pauseMusic();if(this.ctx)this.ctx.suspend()}}
  pause(){this.pauseMusic();if(this.ctx?.state==='running')this.ctx.suspend()}
  resume(){if(this.enabled){this.ensure();this.start()}}
}
