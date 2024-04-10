import React, { useState } from "react";
import { Box, VStack, HStack, Text, Button, Input, Select, useToast, Image } from "@chakra-ui/react";
import { FaWallet, FaPlus, FaCreditCard, FaCog } from "react-icons/fa";

const Index = () => {
  const [balance, setBalance] = useState(0);
  const [cards, setCards] = useState([]);
  const [screen, setScreen] = useState("home");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [fundSource, setFundSource] = useState("");
  const [fundAmount, setFundAmount] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [transactionAmount, setTransactionAmount] = useState(0);
  const toast = useToast();

  const addCard = () => {
    // TODO: Validate card details and add to Google/Apple Wallet using API
    const newCard = { number: cardNumber, expDate, cvv };
    setCards([...cards, newCard]);
    setScreen("home");
    toast({
      title: "Card Added",
      description: "Your virtual travel card has been added to your wallet.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const loadFunds = () => {
    // TODO: Initiate fund loading transaction using Bank/Payment Gateway API
    setBalance(balance + fundAmount);
    setScreen("home");
    toast({
      title: "Funds Loaded",
      description: `$${fundAmount} has been loaded into your virtual wallet.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const makeTransaction = () => {
    if (transactionAmount > balance) {
      toast({
        title: "Insufficient Funds",
        description: "You do not have enough balance to complete this transaction.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    // TODO: Initiate transaction using selected card
    setBalance(balance - transactionAmount);
    setScreen("home");
    toast({
      title: "Transaction Successful",
      description: `$${transactionAmount} has been deducted from your virtual wallet.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box bg="teal.500" minH="100vh" py={8}>
      <VStack spacing={8} align="center">
        {screen === "home" && (
          <>
            <Image src="https://images.unsplash.com/photo-1659177137555-2f1ba453f70c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3YWxsZXQlMjBpY29ufGVufDB8fHx8MTcxMjc0MzU0N3ww&ixlib=rb-4.0.3&q=80&w=1080" w={20} h={20} />
            <Text fontSize="4xl" fontWeight="bold" color="white">
              Virtual Wallet
            </Text>
            <Box bg="white" p={6} borderRadius="lg" boxShadow="md" w="90%">
              <HStack justify="space-between" mb={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Balance: ${balance}
                </Text>
                <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={() => setScreen("addCard")}>
                  Add Card
                </Button>
              </HStack>
              {cards.map((card, index) => (
                <Box
                  key={index}
                  p={4}
                  borderWidth={1}
                  borderRadius="md"
                  mb={4}
                  cursor="pointer"
                  onClick={() => {
                    setSelectedCard(card);
                    setScreen("transaction");
                  }}
                >
                  <HStack>
                    <FaCreditCard size={24} color="teal" />
                    <Text>**** **** **** {card.number.slice(-4)}</Text>
                  </HStack>
                </Box>
              ))}
              <VStack>
                <Button leftIcon={<FaWallet />} colorScheme="teal" onClick={() => setScreen("loadFunds")}>
                  Load Funds
                </Button>
                <Button leftIcon={<FaCog />} variant="outline" colorScheme="teal" onClick={() => setScreen("settings")}>
                  Settings
                </Button>
              </VStack>
            </Box>
          </>
        )}

        {screen === "addCard" && (
          <Box bg="white" p={6} borderRadius="lg" boxShadow="md" w="90%">
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              Add Virtual Travel Card
            </Text>
            <VStack spacing={4} align="stretch">
              <Input placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
              <Input placeholder="Expiration Date" value={expDate} onChange={(e) => setExpDate(e.target.value)} />
              <Input placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} />
              <Button colorScheme="teal" onClick={addCard}>
                Add Card
              </Button>
            </VStack>
          </Box>
        )}

        {screen === "loadFunds" && (
          <Box bg="white" p={6} borderRadius="lg" boxShadow="md" w="90%">
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              Load Funds
            </Text>
            <VStack spacing={4} align="stretch">
              <Select placeholder="Select Funding Source" value={fundSource} onChange={(e) => setFundSource(e.target.value)}>
                <option value="bank">Bank Account</option>
                <option value="card">Credit/Debit Card</option>
              </Select>
              <Input placeholder="Amount" type="number" value={fundAmount} onChange={(e) => setFundAmount(parseFloat(e.target.value))} />
              <Button colorScheme="teal" onClick={loadFunds}>
                Load Funds
              </Button>
            </VStack>
          </Box>
        )}

        {screen === "transaction" && (
          <Box bg="white" p={6} borderRadius="lg" boxShadow="md" w="90%">
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              Make Transaction
            </Text>
            <VStack spacing={4} align="stretch">
              <Text>Selected Card: **** **** **** {selectedCard.number.slice(-4)}</Text>
              <Input placeholder="Amount" type="number" value={transactionAmount} onChange={(e) => setTransactionAmount(parseFloat(e.target.value))} />
              <Button colorScheme="teal" onClick={makeTransaction}>
                Complete Transaction
              </Button>
            </VStack>
          </Box>
        )}

        {screen === "settings" && (
          <Box bg="white" p={6} borderRadius="lg" boxShadow="md" w="90%">
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              Settings
            </Text>
            <VStack spacing={4} align="stretch">
              <Text>Manage your virtual wallet settings here.</Text>
              {/* TODO: Add settings options */}
            </VStack>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Index;