interface LogoProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Logo({
  color = "#fff",
  width = 150,
  height = 150,
}: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="conf-logo-title-header"
      role="img"
    >
      <title id="conf-logo-title-header">JSConf CHILE logo</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M79.3228 49.4957C79.647 49.4957 79.917 57.655 79.917 67.7592C79.917 77.8637 79.647 86.023 79.3228 86.023C78.9985 86.023 78.7283 77.8637 78.7283 67.7592C78.7283 57.709 78.9985 49.4957 79.3228 49.4957ZM70.245 69.9747C70.515 69.9747 70.7313 76.3507 70.7313 84.1857C70.7313 92.021 70.515 98.397 70.245 98.397C69.9748 98.397 69.7585 92.021 69.7585 84.1857C69.7585 76.3507 69.9748 69.9747 70.245 69.9747ZM126.063 56.6282C126.387 56.6282 126.657 64.7875 126.657 74.892C126.657 84.9965 126.387 93.1555 126.063 93.1555C125.739 93.1555 125.468 84.9965 125.468 74.892C125.468 64.7875 125.739 56.6282 126.063 56.6282ZM105.638 61.2212C105.8 61.2212 105.962 65.2737 105.962 70.299C105.962 75.3242 105.8 79.3767 105.638 79.3767C105.476 79.3767 105.313 75.3242 105.313 70.299C105.368 65.3277 105.476 61.2212 105.638 61.2212ZM46.1995 108.771C46.3618 108.771 46.5238 112.824 46.5238 117.849C46.5238 122.875 46.3618 126.927 46.1995 126.927C46.0375 126.927 45.8753 122.875 45.8753 117.849C45.8753 112.824 46.0375 108.771 46.1995 108.771ZM29.9893 85.5907C30.3135 85.5907 30.5835 93.804 30.5835 103.854C30.5835 113.959 30.3135 122.118 29.9893 122.118C29.665 122.118 29.3948 113.905 29.3948 103.854C29.3408 93.75 29.665 85.5907 29.9893 85.5907ZM14.4813 96.5057C14.6434 96.5057 14.8055 100.558 14.8055 105.583C14.8055 110.609 14.6434 114.661 14.4813 114.661C14.3192 114.661 14.157 110.609 14.157 105.583C14.157 100.558 14.3192 96.5057 14.4813 96.5057ZM150 19.8307C150 14.3732 147.784 9.40202 144.164 5.83572C140.598 2.21542 135.627 0 130.169 0H19.8307C14.3732 0 9.40202 2.21542 5.83572 5.83572C2.21542 9.40202 0 14.3732 0 19.8307V130.169C0 135.627 2.21542 140.598 5.83572 144.164C9.40202 147.73 14.3732 150 19.8307 150H130.169C135.627 150 140.598 147.784 144.164 144.164C147.73 140.598 150 135.627 150 130.169V19.8307ZM4.10662 111.149V19.8307C4.10662 15.5079 5.88977 11.6174 8.69957 8.7536C11.5634 5.88977 15.4539 4.16067 19.7766 4.16067H130.115C134.438 4.16067 138.328 5.9438 141.192 8.7536C144.056 11.6174 145.785 15.5079 145.785 19.8307V81.8625C145.785 81.376 145.677 80.9437 145.461 80.5115C144.542 78.7285 143.732 77.0532 143.029 75.4322V75.7565L142.381 98.6672L141.733 75.7565C141.571 69.3262 140.058 63.2745 139.463 56.7362C138.869 53.3322 134.978 44.8487 134.708 53.6022L134.06 76.513L133.466 53.6022C133.303 47.7665 133.79 44.0922 127.36 41.2285C125.36 40.2557 122.713 41.9847 119.308 46.3077C118.012 48.0367 117.795 79.863 117.687 84.294C117.471 77.1615 117.633 48.1447 115.472 43.4437C115.256 43.0115 115.04 42.6872 114.878 42.4712C113.959 41.4985 113.959 43.1737 113.797 43.5517C113.365 44.5785 113.473 44.6325 113.419 45.7672L112.77 68.678C112.662 65.3817 112.662 43.822 111.527 42.4172C109.852 40.3097 108.231 41.4985 107.259 43.4977C106.016 45.9835 106.502 48.469 105.584 51.2247C104.719 53.9265 104.611 53.8185 103.314 56.088C102.72 57.1685 101.909 58.6815 100.991 60.5727C99.91 62.8422 99.0453 62.8422 97.8025 64.7335C96.776 66.2465 96.0195 68.1917 95.479 70.6232C94.9388 73.1087 94.9388 74.4597 92.9935 70.8392C92.5613 70.0287 92.129 69.0022 91.6968 67.7592L91.3725 78.4042L90.9943 65.544C90.778 64.7875 90.562 63.923 90.3458 63.0582L90.1838 62.7342L89.5353 84.1857L89.049 68.0295L88.8328 59.7082C88.5628 59.0057 88.2925 58.3032 88.0223 57.5467L87.698 68.3537L87.0498 91.2645L86.4013 68.3537C86.077 56.9525 85.4828 49.82 83.8075 38.6887C83.6455 38.1485 83.1593 35.5547 82.4568 30.9617C82.1325 28.7465 80.2413 27.0712 77.972 27.1252C76.0808 27.1795 76.1348 28.26 75 29.557C73.1628 31.7182 73.649 47.6045 73.541 51.441L72.8925 74.3515L72.2443 51.441C72.1903 49.2255 72.2443 32.961 71.3255 32.4747C70.9475 32.2587 70.6233 32.5827 70.407 33.4475C70.407 34.0957 70.353 34.6902 70.299 35.1765L69.7045 55.1692L69.2183 37.2297C68.894 37.392 68.5158 37.554 68.0295 37.9322C66.1923 39.175 64.8955 41.0662 64.085 43.606C62.7883 47.7125 62.9503 47.8205 62.7883 52.3595L62.1398 75.2702L61.4913 52.3595L61.3833 47.7125C59.438 50.3062 57.6548 56.9525 56.0878 67.7592C55.6015 77.1615 54.5208 87.9682 52.8998 100.234L52.0893 128.872L51.441 105.962C51.3868 103.368 51.3328 102.558 50.7385 100.072C50.4143 98.6672 50.5223 97.6945 49.6038 96.6137C47.9828 94.6685 46.2535 93.5337 44.4165 93.1015C42.9035 93.3717 41.6608 93.2637 40.742 92.7772L40.688 94.9387L40.0395 117.849L39.3913 94.9387L39.283 91.4805C39.283 91.3725 39.229 91.2645 39.175 91.1022C38.1485 88.7247 36.8515 85.2665 35.3385 80.6195C34.7983 78.9445 33.8798 77.8097 33.6095 76.1887C33.2853 74.1355 33.6635 74.3515 33.8798 72.7305C34.0418 71.5957 33.2313 71.1635 32.961 69.9747C32.799 69.3262 32.853 68.678 32.853 67.9215C32.853 63.977 33.5015 64.3552 30.7998 62.572C30.0433 62.0857 29.2868 61.4372 28.4763 60.5727C27.6118 58.6275 26.477 58.0332 25.018 58.8437C23.8292 59.492 23.3429 61.059 22.4784 62.1397C22.2622 62.41 22.1001 62.626 21.884 62.8422C21.7219 63.0042 21.6138 63.2205 21.6138 63.4907L21.3977 71.6497L20.7493 94.5605L20.1009 71.6497L19.9928 67.4892C19.9928 67.057 19.6686 66.6787 19.2363 66.5705C18.804 66.4625 18.3717 66.6247 18.1556 67.003C18.1556 67.003 18.1556 67.057 18.1016 67.057C17.2911 68.5157 16.5346 70.245 15.8862 72.2982C15.8321 72.4062 15.8321 72.4602 15.8321 72.5685L15.2918 91.8587L14.8595 76.2427C14.2111 79.0525 13.7248 82.2947 13.4006 85.915C12.8062 91.6967 9.88832 102.449 4.701 109.204C4.32277 109.852 4.16067 110.447 4.10662 111.149ZM120.821 132.979C125.414 132.979 130.656 131.574 132.439 126.927C134.33 121.956 132.817 117.957 129.521 115.039C126.549 112.446 122.659 111.689 119.741 109.906C118.174 108.934 116.823 107.745 117.417 105.692C118.282 102.503 122.605 102.936 124.442 104.935L125.414 106.394L130.98 102.882C128.494 98.289 124.063 96.5597 119.092 97.2082C112.716 98.0187 108.988 103.152 110.447 109.366C112.23 117.093 120.984 116.661 124.928 120.605C127.414 123.091 125.414 126.333 122.064 126.603C118.336 126.873 115.85 125.468 113.905 122.28L108.177 125.738C110.717 130.926 115.202 133.033 120.821 132.979ZM101.855 129.467C103.422 127.467 104.179 124.604 104.017 120.983V97.4242H96.83V119.741C96.83 122.118 97.3703 125.63 94.4525 126.441C91.4265 127.251 89.5893 125.414 88.2925 122.875L82.5108 126.387C83.6995 128.818 85.3745 130.601 87.59 131.736C92.0208 134.006 98.667 133.573 101.855 129.467ZM63.8688 92.9395C64.031 92.9395 64.193 96.992 64.193 102.017C64.193 107.042 64.031 111.095 63.8688 111.095C63.7068 111.095 63.5448 107.042 63.5448 102.017C63.5988 96.992 63.7068 92.9395 63.8688 92.9395Z"
        fill={color}
      />
    </svg>
  );
}
