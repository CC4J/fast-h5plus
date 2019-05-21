<template>
	<div class="warp">
		<div class="main">
			<p class="main-one">
				<span class="one-yi"><img src="./chelianglogo8.png"/></span>
				<span class="one-er">动力部分</span>
				<span class="one-san">正常</span>
			</p>
		</div>
		
		<div class="main">
			<p class="main-one">
				<span class="to-yi"><img src="./chelianglogo7.png"/></span>
				<span class="one-er">行驶部分</span>
				<span class="one-san">正常</span>
			</p>
		</div>
		
		<div class="main">
			<p class="main-one">
				<span class="sui-yi"><img src="./chelianglogo10.png"/></span>
				<span class="one-er">底盘部分</span>
				<span class="one-san">正常</span>
			</p>
		</div>
		
		<div class="main">
			<p class="main-one">
				<span class="wu-yi"><img src="./chelianglogo9.png"/></span>
				<span class="one-er">底盘部分</span>
				<span class="one-san">正常</span>
			</p>
		</div>
		
		<div class="main">
			<p class="main-one">
				<span class="liu-yi"><img src="./chelianglogo11.png"/></span>
				<span class="one-er">底盘部分</span>
				<span class="one-san">正常</span>
			</p>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.warp {
		width: 100%;
	}
	
	.main {
		width: 100%;
		box-sizing: border-box;
		padding-left: 32px;
		padding-right: 32px;
		padding-top: 40px;
		padding-bottom: 40px;
		background: white;
		border-bottom: 1px solid #F5F5F5;
		border-top: 1px solid #F5F5F5;
	}
	.main-to{
		width: 100%;
		box-sizing: border-box;
		padding-left: 32px;
		padding-right: 32px;
		padding-top: 40px;
		padding-bottom: 40px;
		background: white;
		border-bottom: 1px solid #F5F5F5;
	}
	.main-one {
		width: 100%;
		position: relative;
	}
	.main-to {
		width: 100%;
		position: relative;
	}
	
	.one-yi {
		width: 28px;
		height: 25px;
		display: inline-block;
		position: relative;
	}
	
	.one-yi img {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 5px;
	}
	
	.one-er {
		font-size: 32px;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		margin-left: 45px;
		letter-spacing: 3px;
	}
	
	.one-san {
		position: absolute;
		right: 0px;
		font-size: 30px;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(60, 193, 255, 1);
		letter-spacing: 3px;
	}
	.to-yi {
		width: 28px;
		height: 28px;
		display: inline-block;
		position: relative;
	}
	
	.to-yi img {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 5px;
	}
	.sui-yi {
		width: 27px;
		height: 37px;
		display: inline-block;
		position: relative;
	}
	
	.sui-yi img {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 8px;
	}
	
	.wu-yi {
		width: 29px;
		height: 20px;
		display: inline-block;
		position: relative;
	}
	
	.wu-yi img {
		width: 100%;
		height: 100%;
		position: absolute;
		top:1px;
	}
	
	.liu-yi {
		width: 30px;
		height: 31px;
		display: inline-block;
		position: relative;
	}
	
	.liu-yi img {
		width: 100%;
		height: 100%;
		position: absolute;
		top:3px;
	}
</style>