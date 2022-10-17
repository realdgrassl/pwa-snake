class Board extends React.Component {
	constructor(props) {
		super(props);
		this.sz = props.sz;
	}

	render = () => {
	  return (
	  <Box margin="10px">
	    <AspectRatio maxW="min(calc(100vw - 20px), calc(100vh - 20px))" ratio={1}>
	      <VStack margin={0} sx={{ ".row": { marginTop: 0, marginBottom: 0 } }}>
	        {new Array(this.sz).fill(null).map((_, n) => (
	          <HStack spacing={0} w="100%" h={`${100 / this.sz}%`} className="row" key={n}>
	            { new Array(this.sz).fill(null).map((_, n) => ( <Box h="100%" w={`${100 / this.sz}%`} bg="blue" key={n} /> ))}
	          </HStack>
	        ))}
	      </VStack>
	    </AspectRatio>
	  </Box>)
	}
}