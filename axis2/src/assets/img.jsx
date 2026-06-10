import { Cloudinary } from '@cloudinary/url-gen'

export const cld = new Cloudinary({
	cloud: {
		cloudName: 'dggteool1',
	},
})
export const getOptimizedImage = publicId => {
	return cld.image(publicId).format('auto').quality('auto')
}
export const getOptimizedImageUrl = publicId => {
	return getOptimizedImage(publicId).toURL()
}
export const IMAGES = {
	BAR_HERO: '11_zatdwk',
	BAR_SECOND: 'AXISEVENTS_PhotoStories_-_KlaudiaCyran-23_tezd98',
	BAR_FRONT: 'AXISEVENTS_PhotoStories_-_KlaudiaCyran-13_yecbym',
	BAR_WITH_SOUND: 'AXISEVENTS_PhotoStories_-_KlaudiaCyran-5_nbwm7b',
	BAR_1: '6_j0x08t',
	BAR_2: '8_no0plx',
	BAR_3: '10_s9fmad',
	BAR_4: '3_i4gdev',
	BAR_5: '2_yzgr3i',
	BAR_RED_THINGS: '7_rqngf8',
	BAR_LIGHTS: 'barfront_22_y42sdm',
	PINK_DRINK: 'AXISEVENTS_PhotoStories_-_KlaudiaCyran-17_jg5zi8',
	//  SEKCJA TENT GALERIA
	SETUP_MAX: 'AXISEVENTS_PhotoStories_-_KlaudiaCyran-30_vwarx8',
	SETUP_LOW: 'AXISEVENTS_PhotoStories_-_KlaudiaCyran-37_vd1het',
	SETUP_MID: 'AXISEVENTS_PhotoStories_-_KlaudiaCyran-39_bwcpja',
	SETUP_4: 'AXISEVENTS_PhotoStories_-_KlaudiaCyran-43_nxoznf',
	BEHRINGER_LOGO: 'AXISEVENTS_PhotoStories_-_KlaudiaCyran-35_yjfruq',
	BARMAN_DRINK: 'AXISEVENTS_PhotoStories_-_KlaudiaCyran-19_hw4oyh',
	BARMAN_DRINK_2: 'AXISEVENTS_PhotoStories_-_KlaudiaCyran_x68yli',
	BARMAN_SHAKE: 'Gemini_shaker_zjjk3p',
	BARMAN_SMILE: 'AXISEVENTS_PhotoStories_-_KlaudiaCyran-6_yuv3v4',
	GLENMORANGIE: 'glenmorangie_smoke_oyu6ax',
	NAMIOT_SETUP: 'AXISEVENTS_PhotoStories_-_KlaudiaCyran-53_fs2alz',
	NAMIOT_INSIDE: 'namiot_inside',
	NAMIOT_FRONT: 'namiot_front',
	NAMIOT_RSIDE: 'AXISEVENTS_PhotoStories_-_KlaudiaCyran-54_yiswkx',
	NAMIOT_HERO: 'AXISEVENTS_PhotoStories_-_KlaudiaCyran-5_nbwm7b',
	PARTY: 'party',
	B40: 'birthday40',
	B40_2: 'birthday40_2',
	B40_3: 'birthday40_3',
	B40_4: 'birthday40_4',
	B_18_FRIENDS: 'friends_party',
	B_18_GIRLS: 'party18_girls',
	B_18_BOY: 'birthday18_boy',
	B_18_BOYS: 'birthday18_boys',
	B_18_BG: 'bg_18th',
	REALIZATION_1: 'party3_beppjx',
	RED_GIRL: 'mirror_girl',
	RED_GIRLS: 'girls_redbg',
	COWBOY_GIRL: 'cowboy_girl',
	COUPLE_LIGHTS: 'lights_couple',
	GIRLS_LIGHTS: 'lights_2_girls',
	GIRL_LIGHTS: 'lights_inside_p47jwe',
	LIGHTS_PARTY: 'party10_l20rsk',
	CLUB_LIGHTS: 'lights_club',
	BOTTLES_LIGHTS: 'bottles_lights',
	BW_GIRL: 'b_and_w_girl',
	POETRY_GIRL: 'poetry',
	LED_LIGHTS: 'led_airship_hpslir',
	LEDS_LASER: 'lightsgemini_yydecu',
	GIF_PARTY: 'party_gif_wb7r20',
	MIXER_LAPTOP: 'AXISEVENTS_PhotoStories_-_KlaudiaCyran-27_ur3bhj',
	PLENER: 'dron-namiot_ftewos',
	WESELE_S: 'bar1_eaku2l',
	WESELE_S2: 'bar2_az282r',
	PLENER_BLOG: 'd0cbae19-ac9a-48f3-a1ad-702bf9fe5f58',
}
