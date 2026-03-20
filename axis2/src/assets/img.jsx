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
	BAR_SECOND: '7_rqngf8',
	BAR_1: '6_j0x08t',
	BAR_2: '8_no0plx',
	BAR_3: '10_s9fmad',
	BAR_4: '3_i4gdev',
	BAR_5: '2_yzgr3i',
	NAMIOT_INSIDE: 'namiot_inside',
	NAMIOT_FRONT: 'namiot_front',
	NAMIOT_RSIDE: 'namiot_Rside',
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
	RED_GIRL: 'mirror_girl',
	RED_GIRLS: 'girls_redbg',
	COWBOY_GIRL: 'cowboy_girl',
	COUPLE_LIGHTS: 'lights_couple',
	GIRLS_LIGHTS: 'lights_2_girls',
	GIRL_LIGHTS: 'lights_inside_p47jwe',
	CLUB_LIGHTS: 'lights_club',
	BOTTLES_LIGHTS: 'bottles_lights',
	BW_GIRL: 'b_and_w_girl',
	POETRY_GIRL: 'poetry',
	LED_LIGHTS: 'led_airship_hpslir',
}
