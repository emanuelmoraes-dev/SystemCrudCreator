export default propValue => ({
	props: {
		value: propValue
	},

	data () {
		return {
			dvalue: null
		}
	},

	created () {
		this.dvalue = this.value
	},

	watch: {
		dvalue (v, o) {
			if (v !== o)
				this.$emit('input', v)
		},

		value (v, o) {
			if (v !== o) {
				this.dvalue = v
				this.$emit('change')
			}
		}
	}
})
