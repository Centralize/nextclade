cmake_minimum_required(VERSION 3.10)
cmake_policy(SET CMP0069 NEW)

project(nextalign_tests)

find_package(Boost 1.75.0 COMPONENTS headers REQUIRED)
find_package(GTest 1.10.0 REQUIRED)
find_package(Microsoft.GSL 3.1.0 REQUIRED)
find_package(fmt 7.1.0 REQUIRED)

add_executable(${PROJECT_NAME}
  _musl_workarounds.c
  alignPairwise.test.cpp
  alignPairwiseWithCodons.test.cpp
  alignmentParams.test.cpp
  data/sampleGeneMap.h
  decode.test.cpp
  extractGene.test.cpp
  findMask.test.cpp
  frameshiftDetector.test.cpp
  mapCoordinates.test.cpp
  nucToString.test.cpp
  parseGeneMapGff.test.cpp
  parseSequences.test.cpp
  range.test.cpp
  removeGaps.test.cpp
  stripInsertions.test.cpp
  translate.test.cpp
  translateGenes.test.cpp
  wraparound.test.cpp
  )

set_property(TARGET ${PROJECT_NAME} PROPERTY C_STANDARD 11)
set_property(TARGET ${PROJECT_NAME} PROPERTY CXX_STANDARD 17)

target_compile_definitions(${PROJECT_NAME}
  PUBLIC -DAPP_NAME="${PROJECT_NAME}"

  -DENABLE_DEBUG_TRACE=${ENABLE_DEBUG_TRACE}

  -DFMT_HEADER_ONLY=1
  )

target_include_directories(${PROJECT_NAME}
  PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/
  )

target_include_directories(${PROJECT_NAME} SYSTEM
  PRIVATE
  "${CMAKE_SOURCE_DIR}/3rdparty/frozen/include"
  "${CMAKE_SOURCE_DIR}/3rdparty/boost/include"
  )


target_link_libraries(${PROJECT_NAME}
  PRIVATE
  nextalign
  Boost::headers
  GTest::gtest
  GTest::gmock
  GTest::gmock_main
  Microsoft.GSL::GSL
  fmt::fmt-header-only
  )

add_test(${PROJECT_NAME} ${PROJECT_NAME})
