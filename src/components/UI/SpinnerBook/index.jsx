import styled from "styled-components";
import { keyframes } from "styled-components";

function n2A(n) {
	let i = 0;
	var arr = [];
	while (i < n) arr[i] = i++;
	return arr;
}

const SpinnerBookLoading = styled.div`
	background-color: rgba(246, 194, 73, 0.8);
	width: 100vw;
	height: calc(100vh - 80px);
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	max-width: "1280px";

	display: flex;
	align-items: center;
	justify-content: center;

	.book {
		--color: #fff;
		--duration: 5s;
		width: 32px;
		height: 12px;
		position: relative;
		margin: 32px 0 0 0;
		//Demo
		zoom: 1.5;
		.inner {
			width: 32px;
			height: 12px;
			position: relative;
			transform-origin: 2px 2px;
			transform: rotateZ(-90deg);
			animation: book var(--duration) ease infinite;
			.left,
			.right {
				width: 60px;
				height: 4px;
				top: 0;
				border-radius: 2px;
				background: var(--color);
				position: absolute;
				&:before {
					content: "";
					width: 48px;
					height: 4px;
					border-radius: 2px;
					background: inherit;
					position: absolute;
					top: -10px;
					left: 6px;
				}
			}
			.left {
				right: 28px;
				transform-origin: 58px 2px;
				transform: rotateZ(90deg);
				animation: left var(--duration) ease infinite;
			}
			.right {
				left: 28px;
				transform-origin: 2px 2px;
				transform: rotateZ(-90deg);
				animation: right var(--duration) ease infinite;
			}
			.middle {
				width: 32px;
				height: 12px;
				border: 4px solid var(--color);
				border-top: 0;
				border-radius: 0 0 9px 9px;
				transform: translateY(2px);
			}
		}
		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			position: absolute;
			left: 50%;
			top: 0;
		}
	}

	@keyframes left {
		4% {
			transform: rotateZ(90deg);
		}
		10%,
		40% {
			transform: rotateZ(0deg);
		}
		46%,
		54% {
			transform: rotateZ(90deg);
		}
		60%,
		90% {
			transform: rotateZ(0deg);
		}
		96% {
			transform: rotateZ(90deg);
		}
	}

	@keyframes right {
		4% {
			transform: rotateZ(-90deg);
		}
		10%,
		40% {
			transform: rotateZ(0deg);
		}
		46%,
		54% {
			transform: rotateZ(-90deg);
		}
		60%,
		90% {
			transform: rotateZ(0deg);
		}
		96% {
			transform: rotateZ(-90deg);
		}
	}

	@keyframes book {
		4% {
			transform: rotateZ(-90deg);
		}
		10%,
		40% {
			transform: rotateZ(0deg);
			transform-origin: 2px 2px;
		}
		40.01%,
		59.99% {
			transform-origin: 30px 2px;
		}
		46%,
		54% {
			transform: rotateZ(90deg);
		}
		60%,
		90% {
			transform: rotateZ(0deg);
			transform-origin: 2px 2px;
		}
		96% {
			transform: rotateZ(-90deg);
		}
	}
`;

const Li = styled.li`
	background: red;

	height: 4px;
	border-radius: 2px;
	transform-origin: 100% 2px;
	width: 48px;
	right: 0;
	top: -10px;
	position: absolute;
	background: var(--color);
	transform: rotateZ(0deg) translateX(-18px);
	animation-duration: var(--duration);
	animation-timing-function: ease;
	animation-iteration-count: infinite;
	animation-name: ${(props) => pageAnimations[props.num]};
`;

const pageAnimations = n2A(18).map((i) => {
	let delay = i * 1.86;
	let delayAfter = i * 1.74;
	/*
  4 + delay
  13 + delayAfter
  54 + delay
  63 + delayAfter
  */
	return keyframes`
    ${4 + delay}% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    ${13 + delayAfter}%, ${54 + delay}% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    ${63 + delayAfter}% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  `;
});

const SpinnerBook = () => (
	<SpinnerBookLoading>
		<Container>
			<div className="book">
				<div className="inner">
					<div className="left"></div>
					<div className="middle"></div>
					<div className="right"></div>
				</div>
				<ul>
					{n2A(18).map((key) => (
						<Li num={key} key={key} />
					))}
				</ul>
			</div>
		</Container>
	</SpinnerBookLoading>
);

export default SpinnerBook;
